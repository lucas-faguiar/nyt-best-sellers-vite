import { FC } from "react";
import "./styles.css";

interface SearchProps {
  searchText: string;
  totalFound: number;
  onSearch: (searchText: string) => void;
}

export const Search: FC<SearchProps> = ({
  searchText,
  totalFound,
  onSearch,
}) => {
  return (
    <>
      <input
        type="text"
        className="generic-list-search"
        placeholder="Search for a title "
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        autoFocus
      />

      <span className="items-found">
        <b>{totalFound}</b>
        {` item${totalFound > 1 ? "s" : ""} found.`}
      </span>
    </>
  );
};
