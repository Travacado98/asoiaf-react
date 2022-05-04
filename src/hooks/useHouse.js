import { useEffect, useState } from "react";

export function useHouse(houseId) {
  const [house, setHouse] = useState();

  useEffect(() => {
    fetchHouse();
  }, [houseId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchHouse = () => {
    setHouse(null);

    fetch(`https://anapioficeandfire.com/api/houses/${houseId}`)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      });
  };

  return { house };
}
