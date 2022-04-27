import { Link } from "react-router-dom";
import { BookName } from "./BookName";

export function CharacterBookList({ character }) {
  return (
    <div>
      {character.povBooks.map((book, i) => {
        const bookId = book.split('/').slice(-1)[0]
        return (
          <Link key={i} to={`/book/${bookId}`}>
            <BookName bookId={bookId}/>
          </Link>
        )
      })}
    </div>
  )
}

