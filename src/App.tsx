import { useEffect, useState } from "react";
import "./App.css";
import nytApi from "./api/nytApi";
import { Book } from "./interfaces/book";
import { BookList } from "./components/BookList";
import { Loading } from "./components/Loading";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBestSellers = async () => {
    if (!books.length) {
      setLoading(true);
      const booksLoaded = await nytApi.fetchBestSellersBooks();
      setBooks(booksLoaded);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  return (
    <main>
      <div className="site-title">
        <h1>Best Seller Books from NYT</h1>
      </div>
      <div className="site-body">
        {loading ? <Loading /> : <BookList books={books} />}
      </div>
    </main>
  );
}

export default App;
