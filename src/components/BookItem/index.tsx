import { FC } from "react";
import { Book } from "../../interfaces/book";
import "./styles.css";
import { BookDetails } from "../BookDetails";

interface BookItemProps {
  book: Book;
  index: number;
  active: number;
  onClick: () => void;
}

export const BookItem: FC<BookItemProps> = ({
  book,
  index,
  active,
  onClick,
}) => {
  const isActive = active === index;
  const classNames = isActive ? "book-item-main active" : "book-item-main";
  return (
    <>
      <div className="book-item">
        <div key={book.title} className={classNames} onClick={onClick}>
          <span className="book-index">#{index + 1}</span>
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author}</span>
        </div>
      </div>
      {isActive && (
        <div className="book-list-body-details-container">
          <BookDetails book={book} />
        </div>
      )}
    </>
  );
};
