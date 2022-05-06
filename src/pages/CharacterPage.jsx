import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterBookList from '../components/CharacterBookList';
import useCharacter from '../hooks/useCharacter';

export default function CharacterPage() {
  const { charId } = useParams();
  const { character } = useCharacter(charId);

  if (!character) return null;

  return (
    <>
      <h3>{character.name}</h3>
      <CharacterBookList character={character} />
    </>
  );
}
