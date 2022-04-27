// import styles from "./App.module.css";

import { useState, useEffect } from "react";
import { BookLink } from "../components/BookLink"
import { BOOK_IMAGES } from "../constants";

export function BookList() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchBooks();
  }, [])
  
  const fetchBooks = () => {
    setBooks(null);
    
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
  }

  if (!books) return null

  return (
    <>
      <h2>Main Series</h2>
      <div className="row">
        {books
          .filter((book) => BOOK_IMAGES[book.name])
          .map((book) => {
            return (
              <div className="col-4" key={book.isbn}> 
                <div className="card">
                  <BookLink book={book}/>
                </div>
              </div>
            )
          })}
      </div>
      <br/>
      <br/>
      <h2>Misc.</h2>
      <div className="row">
        {books
          .filter((book) => !BOOK_IMAGES[book.name])
          .map((book) => {
            return (
              <div className="col-4" key={book.isbn}> 
                <div className="card">
                  <BookLink book={book}/>
                </div>
              </div>
            )
          })}
      </div>
    </>
  );
}
