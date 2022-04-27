import { useParams } from "react-router-dom"
import { BookImage } from "../components/BookImage";
import { CharacterList } from "../components/CharacterList";
import { useBook } from "../hooks/useBook";

export function BookPage() {
    const {bookId} = useParams();
    const {book} = useBook(bookId);

    if (!book) return null;
    
    return (
      <>
        <BookImage book={book} />
        <h3>{ book.name }</h3>
        <CharacterList book={book}/>
      </>
    )
}