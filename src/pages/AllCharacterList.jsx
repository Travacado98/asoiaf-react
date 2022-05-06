// import styles from "./App.module.css";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterName from '../components/CharacterName';
import { BOOK_IMAGES } from '../constants';

export default function AllCharacterList() {
  const [characters, setCharacters] = useState();

  const fetchCharacters = () => {
    setCharacters(null);

    fetch('https://anapioficeandfire.com/api/books?pageSize=50')
      .then((response) => response.json())
      .then((data) => {
        const filteredBooks = data.filter((book) => BOOK_IMAGES[book.name]);
        let combinedCharacters = [];
        filteredBooks.forEach((book) => {
          combinedCharacters = [...combinedCharacters, ...book.povCharacters];
        });
        combinedCharacters = [...new Set(combinedCharacters)];
        setCharacters(combinedCharacters);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (!characters) return null;

  return (
    <>
      <h2>Main Series</h2>
      <div className="row">
        {characters.map((character) => {
          const charId = character.split('/').slice(-1)[0];
          return (
            <div className="col-4" key={charId}>
              <Link to={`/character/${charId}`}>
                <div className="card mb-4">
                  <CharacterName charId={charId} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
