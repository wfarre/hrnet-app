const TableFooter = ({
  startIndex,
  numberEntries,
  entriesPerPage,
  lastEmployeeIndex,
  handleChangePage,
}) => {
  const handlePrevious = () => {
    const newStartIndex =
      startIndex - entriesPerPage < 0
        ? startIndex
        : startIndex - entriesPerPage;
    handleChangePage(newStartIndex);
  };

  const handleNext = () => {
    const newStartIndex =
      startIndex - entriesPerPage > numberEntries
        ? startIndex
        : startIndex + entriesPerPage;
    handleChangePage(newStartIndex);
  };

  return (
    <footer className="employee-table__footer">
      <div className="employee-table__footer__index">
        <p>
          Showing {startIndex + 1} to{" "}
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
        <button className="nav-btn nav-btn--next" onClick={handleNext}>
          Next
        </button>
      </div>
    </footer>
  );
};

export default TableFooter;
