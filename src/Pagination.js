import React from "react";
import classNames from "classnames";
import "./pagination.css";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    "page-item": true,
    active: currentPage === page,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
    </ul>
  );
};

export default Pagination;
