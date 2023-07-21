import { FC } from "react";
import "./styles.css";

interface PaginationProps {
  page: number;
  total: number;
  onChangePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  total,
  onChangePage,
}) => {
  const totalPages = Math.ceil(total / 20);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className="pagination">
      <button disabled={!hasPrev} onClick={() => onChangePage(page - 1)}>
        Prev
      </button>
      <button disabled={!hasNext} onClick={() => onChangePage(page + 1)}>
        Next
      </button>
    </div>
  );
};
