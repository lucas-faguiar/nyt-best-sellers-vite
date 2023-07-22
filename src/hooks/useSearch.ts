import { useState } from "react";
import { Book } from "../interfaces/book";
import { SearchFields, SearchType } from "../interfaces/search";
import nytApi from "../api/nytApi";
import { useDebounce } from "react-use";

export const useSearch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [searchFields, setSearchFields] = useState<SearchFields>({});
  const [searchText, setSearchText] = useState<string>("");
  const [totalFound, setTotalFound] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const fetchBestSellersBooks = async () => {
    setLoading(true);
    const { items, total, error } = await nytApi.fetchBestSellersBooks(
      searchFields
    );
    if (error?.fault.detail.errorcode === "policies.ratelimit.QuotaViolation") {
      setError("Sorry, NYT API rate limit reached. Please try again later.");
    }
    setBooks(items);
    setTotalFound(total);
    setLoading(false);
  };

  const onSelectBook = (index: number) => {
    setSelectedBookIndex(index);
  };

  const onSearch = (searchText: string, type: SearchType) => {
    setSearchText(searchText);
    const page = searchFields?.page !== undefined ? 1 : undefined;
    const searchFieldsNew = { [type]: searchText, page };
    setSearchFields(searchFieldsNew);
  };

  const onChangePage = (page: number) => {
    setLoading(true);
    const searchFieldsNew = { ...searchFields, page };
    setSearchFields(searchFieldsNew);
  };

  useDebounce(
    () => {
      fetchBestSellersBooks();
    },
    1000,
    [searchFields]
  );

  return {
    loading,
    books,
    selectedBookIndex,
    searchText,
    searchFields,
    totalFound,
    error,
    onSelectBook,
    onSearch,
    onChangePage,
  };
};
