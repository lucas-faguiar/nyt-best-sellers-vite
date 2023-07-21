import { FC } from "react";
import { Book } from "../../interfaces/book";
import "./styles.css";

interface BookDetailsProps {
  book: Book;
}

const infoDetail = (title: string, value: string) => {
  return value ? (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  ) : null;
};

const infoInlineDetail = (title: string, value: string | number) => {
  return value ? (
    <p>
      <h4 className="inline-title">{title}:</h4> {value}
    </p>
  ) : null;
};

const infoLinkDetail = (title: string, value: string) => {
  return value ? (
    <a href={value} target="_blank">
      {title}
    </a>
  ) : null;
};

export const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="book-item-body-details">
      <div className="book-item-body-details-column">
        {infoDetail("Title", book.title)}
        {infoDetail("Author", book.author)}
        {infoDetail("Description", book.description)}
        {infoDetail("Publisher", book.publisher)}
      </div>
      <div className="book-item-body-details-column">
        <div>
          <h3>ISBN:</h3>
          {book.isbns.map((isbn) => (
            <div className="section-list-item">
              {infoInlineDetail("ISBN 10", isbn.isbn10)}
              {infoInlineDetail("ISBN 13", isbn.isbn13)}
            </div>
          ))}
        </div>
      </div>
      <div className="book-item-body-details-column">
        <div>
          <h3>Rankings:</h3>
          {book.ranks_history.map((rank) => (
            <div className="section-list-item">
              {infoInlineDetail("Primary ISBN 10", rank.primary_isbn10)}
              {infoInlineDetail("Primary ISBN 13", rank.primary_isbn13)}
              {infoInlineDetail("Rank", rank.rank)}
              {infoInlineDetail("List name", rank.list_name)}
              {infoInlineDetail("Display name", rank.display_name)}
              {infoInlineDetail("Published date", rank.published_date)}
              {infoInlineDetail("Best Seller Date", rank.bestsellers_date)}
              {infoInlineDetail("Weks on list", rank.weeks_on_list)}
              {infoInlineDetail("Rank last week", rank.rank_last_week)}
              {infoInlineDetail("Asterisk", rank.asterisk)}
              {infoInlineDetail("Dagger", rank.dagger)}
            </div>
          ))}
        </div>
      </div>
      <div className="book-item-body-details-column">
        <div>
          <h3>Reviews:</h3>
          {book.reviews.map((review) => (
            <div className="section-list-item">
              {infoLinkDetail("Review", review.book_review_link)}
              {infoLinkDetail("First chapter", review.first_chapter_link)}
              {infoLinkDetail("Sunday review", review.sunday_review_link)}
              {infoLinkDetail("Article chapter", review.article_chapter_link)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
