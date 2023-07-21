import { FC, useState } from "react";
import { Book } from "../../interfaces/book";
import { BookItem } from "../BookItem";
import "./styles.css";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="book-list fadeIn">
      <div className="book-list-body">
        {books.length === 0 ? (
          <h2>No books found</h2>
        ) : (
            <div className="book-list-body-items-container">
              {books.map((book, index) => (
                <BookItem
                  book={book}
                  index={index}
                  active={active}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
        )}
      </div>
    </div>
  );
};
