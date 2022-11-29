import "./pagination.css";
import classNames from "classnames";

const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
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
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  const pagesCut = getPagesCut({
    pagesCount,
    pagesCutCount: 3,
    currentPage,
  });
  const pages = range(pagesCut.start, pagesCut.end);
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
