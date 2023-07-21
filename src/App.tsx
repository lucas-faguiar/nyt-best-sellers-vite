import { useEffect, useState } from "react";
import "./App.css";
import nytApi from "./api/nytApi";
import { Book } from "./interfaces/book";
import GenericList from "./components/GenericList";
import { Loading } from "./components/Loading";
import { BookItem } from "./components/BookItem";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);

  const fetchBestSellersBooks = async (offset: number = 0) => {
    setLoading(true);
    const loaded = await nytApi.fetchBestSellersBooks(offset);
    setBooks(loaded);
    setLoading(false);
  };

  useEffect(() => {
    fetchBestSellersBooks();
  }, []);

  const onSelectBook = (index: number) => {
    setSelectedBookIndex(index);
  };

  return (
    <>
      <header>
        <h1>Best Seller Books from NYT</h1>
      </header>
      <main className="fadeIn">
        <div className="site-body">
          {loading && <Loading />}
          {!loading && books && (
            <GenericList
              items={books}
              itemName="Books"
              itemComponent={BookItem}
              onSelectItem={onSelectBook}
              activeIndex={selectedBookIndex}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
