import { useBook } from "../hooks/useBook"

export function BookName({ bookId }) {

    const {book} = useBook(bookId);

    if (!book) return null

    return (
        <h1>{ book.name }</h1>
    )
  }
  
  