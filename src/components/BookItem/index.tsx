import { FC } from "react";
import { Book } from "../../interfaces/book";
import "./styles.css";

interface BookItemProps {
  book: Book;
  index: number;
}

export const BookItem: FC<BookItemProps> = ({ book, index }) => {
  return (
    <div key={book.title} className="book-item">
      <span>{index + 1}</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <span>{book.publisher}</span>
    </div>
  );
};
