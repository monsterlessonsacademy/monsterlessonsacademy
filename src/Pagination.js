import "./pagination.css";
import classNames from "classnames";

const range = (start, end) => {
  return [...Array(end - start + 1).keys()].map((el) => el + start);
};

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  if (pagesCount < pagesCutCount) {
    console.log("case 1");
    return { start: 0, end: pagesCount };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    console.log("case 2");
    return { start: 0, end: pagesCutCount };
  } else if (currentPage + floor >= pagesCount) {
    console.log("case 3");
    return { start: pagesCount - pagesCutCount, end: pagesCount };
  } else {
    console.log("case 4");
    return { start: currentPage - ceiling, end: currentPage + floor };
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
  console.log("pagesCut", pagesCut, pagesCount, pages);
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
