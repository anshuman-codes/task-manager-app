import React from "react";
import { usePagination, DOTS } from "../usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <li className="pagination-item" onClick={onPrevious}>
        &#5193;
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        return (
          <li
            className={`${
              pageNumber === currentPage ? "active-page" : ""
            } pagination-item`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className="pagination-item" onClick={onNext}>
        &#754;
      </li>
    </ul>
  );
};

export default Pagination;
