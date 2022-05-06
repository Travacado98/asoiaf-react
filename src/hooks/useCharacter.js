import { useState, useEffect } from 'react';

export default function useCharacter(charId) {
  const [character, setCharacter] = useState();

  const fetchCharacter = () => {
    setCharacter(null);

    fetch(`https://www.anapioficeandfire.com/api/characters/${charId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  };

  useEffect(() => {
    fetchCharacter();
  }, [charId]);

  return { character };
}
