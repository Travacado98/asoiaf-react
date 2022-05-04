// import styles from "./App.module.css";

import { useState, useEffect } from "react";
import { CharacterName } from "../components/CharacterName";
import { BOOK_IMAGES } from "../constants";
import { Link } from "react-router-dom";

export function AllCharacterList() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetchCharacters();
  }, [])
  
  const fetchCharacters = () => {
    setCharacters(null);
    
    fetch('https://anapioficeandfire.com/api/books?pageSize=50')
      .then(response => response.json())
      .then(data => {
        const filteredBooks = data.filter((book) => BOOK_IMAGES[book.name])
        let combinedCharacters = []
        filteredBooks.forEach((book) => {
          combinedCharacters = [...combinedCharacters, ...book.povCharacters]
        })
        combinedCharacters = [...new Set(combinedCharacters)]
        setCharacters(combinedCharacters);
      })
  }

  if (!characters) return null

  return (
    <>
      <h2>Main Series</h2>
      <div className="row">
        {characters.map((character, i) => {
              const charId = character.split('/').slice(-1)[0]
          return (
            <div className="col-4" key={i}> 
              <Link to={`/character/${charId}`}>
                <div className="card mb-4">
                    <CharacterName charId={charId}/>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  );
}
