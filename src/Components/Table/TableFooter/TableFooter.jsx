import PropTypes from "prop-types";

/**
 * React component TableFooter
 * @param {number} startIndex - index in the array from where we start to display data
 * @param {number} numberEntries - number total of entries
 * @param {number} entriesPerPage - number total of entries displayed by page
 * @param {number} lastEmployeeIndex - the index of the last employee displayed on the page
 * @param {function} handleChangePage - allow to change the employees displayed on the page
 * @param {function} handlePageNumber - allow to pass the new page index to the parent element
 * @param {number} pageNumber - index of the page
 * @returns TableFoonter component
 */
const TableFooter = ({
  startIndex,
  numberEntries,
  entriesPerPage,
  lastEmployeeIndex,
  handleChangePage,
  handlePageNumber,
  pageNumber,
}) => {
  const numberOfPages = Math.ceil(numberEntries / entriesPerPage);
  const pageBtnIndex = [];
  //generate an array to build my page buttons after
  for (let i = 1; i <= numberOfPages; i++) {
    pageBtnIndex.push(i);
  }

  /**
   * User click on previous, the user will be redirected to the previous page of current employees
   */
  const handlePrevious = () => {
    const newStartIndex =
      startIndex - entriesPerPage < 0
        ? startIndex
        : startIndex - entriesPerPage;
    const newPage = pageNumber === 1 ? pageNumber : pageNumber - 1;
    handleChangePage(newStartIndex);
    handlePageNumber(parseInt(newPage));
  };

  /**
   * User click on next, the user will be redirected to the next page of current employees
   */
  const handleNext = () => {
    const newStartIndex =
      startIndex - entriesPerPage > numberEntries
        ? startIndex
        : startIndex + entriesPerPage;
    const newPage = pageNumber === numberOfPages ? pageNumber : pageNumber + 1;
    handleChangePage(newStartIndex);
    handlePageNumber(parseInt(newPage));
  };

  /**
   * User click on a page button, the user will be redirected to the right page of current employees
   */
  const handlePageBtnClick = (e) => {
    const newStartIndex = e.target.id * entriesPerPage - entriesPerPage;
    handleChangePage(newStartIndex);
    handlePageNumber(parseInt(e.target.id));
  };

  return (
    <footer className="employee-table__footer">
      <div className="employee-table__footer__index">
        <p>
          Showing {numberEntries === 0 ? 0 : startIndex + 1} to{" "}
          {lastEmployeeIndex >= numberEntries
            ? numberEntries
            : lastEmployeeIndex}{" "}
          of {numberEntries} entries
        </p>
      </div>
      <div className="employee-table__footer__tablenav">
        <button className="nav-btn nav-btn--prev" onClick={handlePrevious}>
          Previous
        </button>
        {pageBtnIndex.map((index) => {
          return (
            <button
              id={index}
              className={
                parseInt(pageNumber) === parseInt(index)
                  ? "page-btn active"
                  : "page-btn"
              }
              key={index}
              onClick={handlePageBtnClick}
            >
              {index}
            </button>
          );
        })}

        <button className="nav-btn nav-btn--next" onClick={handleNext}>
          Next
        </button>
      </div>
    </footer>
  );
};

TableFooter.propTypes = {
  startIndex: PropTypes.number,
  numberEntries: PropTypes.number,
  entriesPerPage: PropTypes.number,
  lastEmployeeIndex: PropTypes.number,
  handleChangePage: PropTypes.func,
  handlePageNumber: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default TableFooter;
