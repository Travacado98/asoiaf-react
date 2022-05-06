// import styles from "./App.module.css";

import React, { useState, useEffect } from 'react';
import BookLink from '../components/BookLink';
import { BOOK_IMAGES } from '../constants';

export default function BookList() {
  const [books, setBooks] = useState();

  const fetchBooks = () => {
    setBooks(null);

    fetch('https://anapioficeandfire.com/api/books?pageSize=50')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  };

  useEffect(() => {
    document.title = 'ASOIAF | Books';
    fetchBooks();
  }, []);

  if (!books) return null;

  return (
    <div className="container text-center">
      <h2>Main Series</h2>
      <div className="row">
        {books
          .filter((book) => BOOK_IMAGES[book.name])
          .map((book) => (
            <div className="col-4" key={book.isbn}>
              <div className="card mb-4">
                <BookLink book={book} />
              </div>
            </div>
          ))}
      </div>
      <br />
      <br />
      <h2>Misc.</h2>
      <div className="row">
        {books
          .filter((book) => !BOOK_IMAGES[book.name])
          .map((book) => (
            <div className="col-4" key={book.isbn}>
              <div className="card mb-4">
                <BookLink book={book} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
