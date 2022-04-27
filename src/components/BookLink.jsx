import { Link } from "react-router-dom";
import { BookImage } from "./BookImage";
import { BOOK_IMAGES } from "../constants";

export function BookLink({ book }) {
  return (

    <Link to={`/book/${book.url.split('/').slice(-1)[0]}`}>
        {!!BOOK_IMAGES[book.name] && (
          <BookImage book={book}/>
        )}
      <h3>{ book.name }</h3>
    </Link>
  )
}

