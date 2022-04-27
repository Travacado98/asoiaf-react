import { BOOK_IMAGES } from "../constants";

export function BookImage({ book }) {
  return (
      <img height={300} alt="" src={BOOK_IMAGES[book.name]} />
  )
}

