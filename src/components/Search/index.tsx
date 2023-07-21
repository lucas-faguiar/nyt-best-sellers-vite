import { FC, useEffect, useState } from "react";
import "./styles.css";
import { SearchType } from "../../interfaces/search";

interface SearchProps {
  searchText: string;
  totalFound: number;
  onSearch: (searchText: string, type: SearchType) => void;
}

export const Search: FC<SearchProps> = ({
  searchText,
  totalFound,
  onSearch,
}) => {
  const [searchType, setSearchType] = useState<SearchType>(SearchType.TITLE);

  useEffect(() => {
    onSearch(searchText, searchType);
  }, [searchType]);

  return (
    <>
      <div className="search-type">
        <label>
          <input
            type="radio"
            value="Title"
            name="searchType"
            checked={searchType === SearchType.TITLE}
            onChange={() => setSearchType(SearchType.TITLE)}
          />{" "}
          Title
        </label>
        <label>
          <input
            type="radio"
            value="Author"
            name="searchType"
            checked={searchType === SearchType.AUTHOR}
            onChange={() => setSearchType(SearchType.AUTHOR)}
          />{" "}
          Author
        </label>
        <label>
          <input
            type="radio"
            value="Publisher"
            name="searchType"
            checked={searchType === SearchType.PUBLISHER}
            onChange={() => setSearchType(SearchType.PUBLISHER)}
          />{" "}
          Publisher
        </label>
        <label>
          <input
            type="radio"
            value="ISBN"
            name="searchType"
            checked={searchType === SearchType.ISBN}
            onChange={() => setSearchType(SearchType.ISBN)}
          />{" "}
          ISBN
        </label>
      </div>
      <input
        type="text"
        className="generic-list-search"
        placeholder="Search for a title, author, publisher, isbn... "
        value={searchText}
        onChange={(e) => onSearch(e.target.value, searchType)}
        autoFocus
      />

      <span className="items-found">
        <b>{totalFound}</b>
        {` item${totalFound > 1 ? "s" : ""} found.`}
      </span>
    </>
  );
};
