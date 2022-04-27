import { useEffect, useState } from "react";

export function useBook(bookId) {
  const [book, setBook] = useState();

  useEffect(() => {
    fetchBook();
  }, [bookId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchBook = () => {
    setBook(null);

    fetch(`https://anapioficeandfire.com/api/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  };

  return { book };
}
