import GenericList from "./components/GenericList";
import { BookItem } from "./components/BookItem";
import "./App.css";
import { Pagination } from "./components/Pagination";
import { useSearch } from "./hooks/useSearch";

function App() {
  const {
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
  } = useSearch();

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
