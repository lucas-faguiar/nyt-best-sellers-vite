import { FC } from "react";
import { Book } from "../../interfaces/book";
import "./styles.css";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="book-item-body-details">
      <div>
        <h3>Title:</h3>
        <p>{book.title}</p>
      </div>
      <div>
        <h3>Author:</h3>
        <p>{book.author}</p>
      </div>
      <div>
        <h3>Description:</h3>
        <p>{book.description}</p>
      </div>
      <div>
        <h3>Publisher:</h3>
        <p>{book.publisher}</p>
      </div>
    </div>
  );
};
