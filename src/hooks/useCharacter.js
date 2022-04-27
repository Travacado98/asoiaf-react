import { useState, useEffect } from "react";

export function useCharacter(charId) {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetchCharacter();
  }, [charId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchCharacter = () => {
    setCharacter(null);

    fetch(`https://www.anapioficeandfire.com/api/characters/${charId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  };

  return { character };
}
