import { useEffect, useState } from 'react';

export default function useBook(bookId) {
  const [book, setBook] = useState();

  const fetchBook = () => {
    setBook(null);

    fetch(`https://anapioficeandfire.com/api/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  };

  useEffect(() => {
    fetchBook();
  }, [bookId]);

  return { book };
}
