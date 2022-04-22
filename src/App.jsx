// import styles from "./App.module.css";

import { useState, useEffect } from "react";


function App() {

  const [books, setBooks] = useState();

  useEffect(() => {
    fetchBooks();
  }, [])
  
  const fetchBooks = () => {
    setBooks(null);
    
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => {
          setTimeout(() => {
            setBooks(data);
          }, 1000);
      })
  }



  return (
    <div className="container">
      <button onClick={fetchBooks}>Reload</button>
      {!books
        ? <div>Loading...</div>
        : books.map((book, i) => {
          return <h1 key={i} >{ book.name }</h1>
        })}
    </div>
  );
}

export default App;
