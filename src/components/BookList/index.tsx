import { FC } from "react";
import { Book } from "../../interfaces/book";
import { BookItem } from "../BookItem";
import "./styles.css";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      <div className="book-list-header">
        <div className="book-list-header-item">#</div>
        <div className="book-list-header-item">Title</div>
        <div className="book-list-header-item">Author</div>
        <div className="book-list-header-item">Publisher</div>
      </div>
      <div>
        {books.length === 0 ? (
          <h2>No books found</h2>
        ) : (
          books.map((book, index) => (
            <div>
              <BookItem book={book} index={index} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
