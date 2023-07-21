import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import nytApi from "./api/nytApi";
import { Book } from "./interfaces/book";
import GenericList from "./components/GenericList";
import { BookItem } from "./components/BookItem";
import { SearchFields } from "./interfaces/search";
import "./App.css";
import { Pagination } from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
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

  useEffect(() => {
    fetchBestSellersBooks();
  }, []);

  const onSelectBook = (index: number) => {
    setSelectedBookIndex(index);
  };

  const onSearch = (searchText: string) => {
    setSearchText(searchText);
    const searchFieldsNew = { ...searchFields, title: searchText, page: 1 };
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

  return (
    <>
      <header>
        <h1>Best Seller Books from NYT</h1>
      </header>
      <main className="fadeIn">
        <div className="site-body">
          {books && (
            <GenericList
              items={books}
              itemName="Books"
              itemComponent={BookItem}
              onSelectItem={onSelectBook}
              activeIndex={selectedBookIndex}
              onSearch={onSearch}
              searchText={searchText}
              loading={loading}
              totalFound={totalFound}
              page={searchFields.page || 1}
              error={error}
            />
          )}
          <Pagination
            page={searchFields.page || 1}
            total={totalFound}
            onChangePage={onChangePage}
          />
        </div>
      </main>
    </>
  );
}

export default App;
