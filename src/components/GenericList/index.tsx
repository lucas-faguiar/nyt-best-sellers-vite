import { FC } from "react";
import { Loading } from "../Loading";
import { Search } from "../Search";
import "./styles.css";

interface GenericListProps<T> {
  items: T[];
  itemName: string;
  itemComponent: FC<GenericItemProps<T>>;
  onSelectItem: (index: number) => void;
  activeIndex: number;
  onSearch: (searchText: string) => void;
  searchText: string;
  loading: boolean;
  totalFound: number;
  page: number;
  error: string;
}

export interface GenericItemProps<T> {
  item: T;
  index: number;
  page: number;
  active: number;
  onClick: () => void;
}

function GenericList<T>(props: GenericListProps<T>) {
  const {
    items,
    itemName,
    itemComponent: ItemComponent,
    onSelectItem,
    activeIndex,
    onSearch,
    searchText,
    loading,
    totalFound,
    page,
    error,
  } = props;
  return (
    <div className="generic-list fadeIn">
      <h2>{itemName}</h2>
      <div className="generic-list-body">
        <Search
          searchText={searchText}
          totalFound={totalFound}
          onSearch={onSearch}
        />
        {loading && <Loading />}
        {!loading && (
          <div className="fadeIn generic-list-body-items-container">
            {totalFound === 0 || error ? (
              <div className="generic-list-error">
                {error ? (
                  <h3>{error}</h3>
                ) : (
                  <h3>{`No ${itemName.toLowerCase()} found`}</h3>
                )}
              </div>
            ) : (
              items.map((item, index) => (
                <ItemComponent
                  item={item}
                  index={index}
                  page={page}
                  active={activeIndex}
                  onClick={() => onSelectItem(index)}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GenericList;
