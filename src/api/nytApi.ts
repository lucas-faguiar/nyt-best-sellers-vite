import { Book } from "../interfaces/book";
import { SearchError, SearchFields, SearchResults } from "../interfaces/search";

const API_URL = import.meta.env.VITE_NYT_API_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const fetchBestSellersBooks = async (
  searchFields: SearchFields
): Promise<SearchResults<Book>> => {
  // Is empty search
  const isEmptySearch = Object.values(searchFields).every(
    (x) => x === null || x === ""
  );

  // Check if books are on local storage
  if (isEmptySearch) {
    const localStorageBooks = localStorage.getItem("books");
    if (localStorageBooks) {
      return JSON.parse(localStorageBooks);
    }
  }

  // Fetch from NYT API
  let url = `${API_URL}/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`;
  if (searchFields.page && searchFields.page > 1) {
    url += `&offset=${(searchFields.page - 1) * 20}`;
  }
  if (searchFields.title) {
    url += `&title=${searchFields.title}`;
  }
  if (searchFields.author) {
    url += `&author=${searchFields.author}`;
  }
  if (searchFields.publisher) {
    url += `&publisher=${searchFields.publisher}`;
  }
  if (searchFields.isbn) {
    url += `&isbn=${searchFields.isbn}`;
  }

  const response = await fetch(url);
  const error = undefined;
  if (response.ok) {
    const data = await response.json();
    const books: Book[] = data.results;
    const searchResult = {
      items: books,
      total: data.num_results as number,
      error,
    };
    if (isEmptySearch) {
      localStorage.setItem("books", JSON.stringify(searchResult));
    }
    return searchResult;
  }
  return { items: [], total: 0, error: (await response.json()) as SearchError };
};

const nytApi = {
  fetchBestSellersBooks,
};

export default nytApi;
