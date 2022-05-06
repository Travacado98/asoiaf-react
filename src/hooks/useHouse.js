import { useEffect, useState } from 'react';

export default function useHouse(houseId) {
  const [house, setHouse] = useState();

  const fetchHouse = () => {
    setHouse(null);

    fetch(`https://anapioficeandfire.com/api/houses/${houseId}`)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      });
  };

  useEffect(() => {
    fetchHouse();
  }, [houseId]);

  return { house };
}
