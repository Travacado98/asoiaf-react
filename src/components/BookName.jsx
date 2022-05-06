import React from 'react';
import useBook from '../hooks/useBook';

export default function BookName({ bookId }) {
  const { book } = useBook(bookId);

  if (!book) return null;

  return (
    <h1>{ book.name }</h1>
  );
}
