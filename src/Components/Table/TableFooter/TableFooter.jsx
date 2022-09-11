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

  const numberOfPages = Math.ceil(numberEntries / entriesPerPage);
  const pageBtnIndex = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageBtnIndex.push(i);
  }

  const handlePageBtnClick = (e) => {
    console.log(numberOfPages);
    const newStartIndex = e.target.id * entriesPerPage - entriesPerPage;
    console.log(newStartIndex);
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
        {pageBtnIndex.map((index) => {
          return (
            <button
              className="page-btn"
              id={index}
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

export default TableFooter;
