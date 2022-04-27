import { Routes, Route, Link } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { BookPage } from "./pages/BookPage";
import { CharacterPage } from "./pages/CharacterPage";

export function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="book/:bookId" element={<BookPage />} />
          <Route path="character/:charId" element={<CharacterPage />} />
        </Routes>
      </div>
    </>
  );
}
