import { Book } from "../interfaces/book";

const API_URL = import.meta.env.VITE_NYT_API_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const fetchBestSellersBooks = async (offset: number): Promise<Book[]> => {
  // Check if books are on local storage
  const localStorageBooks = localStorage.getItem("books");
  if (localStorageBooks) {
    return JSON.parse(localStorageBooks);
  }

  // Fetch from NYT API
  const response = await fetch(
    `${API_URL}/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}&offset=${offset}`
  );
  if (response.ok) {
    const data = await response.json();
    const books: Book[] = data.results;
    localStorage.setItem("books", JSON.stringify(books));
    return books;
  }
  return [];
};

const nytApi = {
  fetchBestSellersBooks,
};

export default nytApi;
