import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCharacterList from './pages/AllCharacterList';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import CharacterPage from './pages/CharacterPage';
import AllHouseList from './pages/AllHouseList';
import Home from './pages/Home';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="container d-flex flex-column">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="books/" element={<BookList />} />
            <Route path="characters/" element={<AllCharacterList />} />
            <Route path="book/:bookId" element={<BookPage />} />
            <Route path="character/:charId" element={<CharacterPage />} />
            <Route path="houses/" element={<AllHouseList />} />
          </Routes>
        </div>
      </div>
      <footer className="container-fluid text-center mt-auto">
        <p>A project by Travis Smith</p>
      </footer>
    </div>
  );
}
