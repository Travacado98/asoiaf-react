import React from 'react';
import { Link } from 'react-router-dom';
import CharacterName from './CharacterName';

export default function CharacterList({ book }) {
  return (
    <div>
      {book.povCharacters.map((character) => {
        const charId = character.split('/').slice(-1)[0];
        return (
          <Link key={charId} to={`/character/${charId}`}>
            <CharacterName charId={charId} />
          </Link>
        );
      })}
    </div>
  );
}
