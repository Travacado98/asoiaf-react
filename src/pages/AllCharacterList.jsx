// import styles from "./App.module.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterName from '../components/CharacterName';

export default function AllCharacterList() {
  useEffect(() => {
    document.title = 'ASOIAF | Characters';
  }, []);

  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const getLastPage = (response) => {
    const linkHeader = [...response.headers].find((header) => header[0] === 'link')[1];

    const lastUrl = linkHeader.split(',').find((item) => item.includes('last')).trim().split(';')[0].replace('<', '').replace('>', '');

    const urlSearchParams = new URLSearchParams(lastUrl.split('?')[1]);
    const params = Object.fromEntries(urlSearchParams.entries());

    return parseInt(params.page, 10);
  };

  const fetchCharacters = async () => {
    setCharacters(null);

    const response = await fetch(`https://anapioficeandfire.com/api/characters?pageSize=50&page=${page}`);
    if (!lastPage) setLastPage(getLastPage(response));
    const data = await response.json();
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  if (!characters) return null;

  return (
    <>
      <h2>Main Series</h2>
      <div className="row">
        {characters.map((character) => {
          const charId = character.url.split('/').slice(-1)[0];
          return (
            <div className="col-4" key={charId}>
              <Link to={`/characters/${charId}`}>
                <div className="card mb-4">
                  <CharacterName charId={charId} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {page > 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>Previous</button>
      )}
      {page < lastPage && (
        <button type="button" onClick={() => setPage(page + 1)}>Next</button>
      )}
    </>
  );
}
