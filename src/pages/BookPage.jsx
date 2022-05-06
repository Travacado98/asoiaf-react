import React from 'react';
import { useParams } from 'react-router-dom';
import BookImage from '../components/BookImage';
import CharacterList from '../components/CharacterList';
import useBook from '../hooks/useBook';

export default function BookPage() {
  const { bookId } = useParams();
  const { book } = useBook(bookId);

  if (!book) return null;

  return (
    <>
      <div className="col">
        <BookImage book={book} />
        <h3>{ book.name }</h3>
        <h3>
          Author:
          { book.authors }
        </h3>
        <h3>
          Pages:
          { book.numberOfPages }
        </h3>
        <h3>
          Released:
          { book.released }
        </h3>
      </div>
      <div>
        <h2>Characters</h2>
        <CharacterList book={book} />
      </div>
    </>
  );
}
