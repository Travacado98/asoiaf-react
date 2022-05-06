import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AllCharacterList from './pages/AllCharacterList';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import CharacterPage from './pages/CharacterPage';
import AllHouseList from './pages/AllHouseList';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="books/">Books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="characters/">Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="houses/">Houses</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="books/" element={<BookList />} />
          <Route path="characters/" element={<AllCharacterList />} />
          <Route path="book/:bookId" element={<BookPage />} />
          <Route path="character/:charId" element={<CharacterPage />} />
          <Route path="houses/" element={<AllHouseList />} />
        </Routes>
      </div>
      <footer className="container-fluid text-center">
        <p>A project by Travis Smith</p>
      </footer>
    </>
  );
}
