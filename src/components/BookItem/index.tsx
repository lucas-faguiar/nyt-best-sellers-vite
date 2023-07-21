import { FC } from "react";
import { Book } from "../../interfaces/book";
import "./styles.css";
import { BookDetails } from "../BookDetails";
import { GenericItemProps } from "../GenericList";

export const BookItem: FC<GenericItemProps<Book>> = ({
  item,
  index,
  active,
  onClick,
}) => {
  const isActive = active === index;
  const classNames = isActive ? "book-item-main active" : "book-item-main";
  return (
    <>
      <div className="book-item">
        <div key={item.title} className={classNames} onClick={onClick}>
          <span className="book-index">#{index + 1}</span>
          <span className="book-title">{item.title}</span>
          <span className="book-author">{item.author}</span>
        </div>
      </div>
      {isActive && (
        <div className="book-list-body-details-container">
          <BookDetails book={item} />
        </div>
      )}
    </>
  );
};
