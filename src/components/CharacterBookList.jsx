import React from 'react';
import { Link } from 'react-router-dom';
import BookName from './BookName';

export default function CharacterBookList({ character }) {
  return (
    <div>
      {character.povBooks.map((book) => {
        const bookId = book.split('/').slice(-1)[0];
        return (
          <Link key={bookId} to={`/book/${bookId}`}>
            <BookName bookId={bookId} />
          </Link>
        );
      })}
    </div>
  );
}
