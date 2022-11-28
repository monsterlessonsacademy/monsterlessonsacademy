import "./pagination.css";
import classNames from "classnames";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
    disabled: isDisabled,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <ul className="pagination">
      <PaginationItem
        page="First"
        onPageChange={() => onPageChange(1)}
        currentPage={currentPage}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page="Prev"
        onPageChange={() => onPageChange(currentPage - 1)}
        currentPage={currentPage}
        isDisabled={isFirstPage}
      />

      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}

      <PaginationItem
        page="Next"
        onPageChange={() => onPageChange(currentPage + 1)}
        currentPage={currentPage}
        isDisabled={isLastPage}
      />

      <PaginationItem
        page="Last"
        onPageChange={() => onPageChange(pagesCount)}
        currentPage={currentPage}
        isDisabled={isLastPage}
      />
    </ul>
  );
};
export default Pagination;
