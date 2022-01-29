import React from "react";
import { usePagination, DOTS } from "../usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
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
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        &#8249;
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={-1} className="pagination-item dots">
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={index}
            className={`${
              pageNumber === currentPage ? "active-page" : ""
            } pagination-item`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={onNext}
      >
        &#8250;
      </li>
    </ul>
  );
};

export default Pagination;
