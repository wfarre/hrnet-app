import { ascendingSort, descendingSort } from "../../utils/sort";
import PropTypes from "prop-types";
import "./assets/Table.css";
import React, { Suspense } from "react";
import { useState, useEffect, lazy } from "react";
import { tableHeaders } from "../../assets/data/tableHeaders";
import TableHeader from "./tableHeader/TableHeader";
import TableFooter from "./TableFooter/TableFooter";
const EmployeeCard = lazy(() => import("./EmployeeCard.jsx/EmployeeCard"));

const renderLoader = () => <p>Loading</p>;

/**
 * React Component Table
 * @param {*} employees
 * @returns Component Table
 */
const Table = ({ employees }) => {
  const [numberEntries, setNumberEntries] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [data, setData] = useState([]);

  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [lastEmployeeIndex, setLastEmployeeIndex] = useState(entriesPerPage);
  const [searchInput, setSearchInput] = useState("");

  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const [clickCounter, setClickCounter] = useState(1);
  const [prevId, setPrevId] = useState("firstName");
  const [currentDataType, setCurrentDataType] = useState("string");

  const [pageNumber, setPageNumber] = useState(1);

  /**
   *
   * @param {*} data
   * @param {*} startIndex
   * @returns array of employees to display on one page
   */
  const getEmployeeToDisplay = (data, startIndex) => {
    let newArray = [];
    for (let i = startIndex; i < endIndex; i++) {
      newArray.push(data[i]);
    }
    return newArray;
  };

  /**
   * update the page number
   * @param {*} number
   */
  const handlePageNumber = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    setLastEmployeeIndex(startIndex + entriesPerPage);
  }, [entriesPerPage, startIndex]);

  useEffect(() => {
    setNumberEntries(dataToDisplay.length);
  }, [dataToDisplay]);

  useEffect(() => {
    numberEntries < lastEmployeeIndex
      ? setEndIndex(numberEntries)
      : setEndIndex(lastEmployeeIndex);
  }, [lastEmployeeIndex, numberEntries, dataToDisplay]);

  useEffect(() => {
    if (clickCounter === 1) {
      setDataToDisplay(ascendingSort(dataToDisplay, currentDataType, prevId));
    }
    if (clickCounter === 2) {
      setDataToDisplay(descendingSort(dataToDisplay, currentDataType, prevId));
    }
    setData(getEmployeeToDisplay(dataToDisplay, startIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevId, clickCounter, currentDataType]);

  useEffect(() => {
    /**
     *
     * @param {*} employees
     * @param {*} searchInput
     * @returns array with the right employees
     */
    const getEmployeesBySearch = (employees, searchInput) => {
      if (searchInput === "") {
        setStartIndex(0);
        return employees;
      } else {
        setStartIndex(0);
        return employees.filter(
          (employee) =>
            employee.firstName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    };
    setDataToDisplay(getEmployeesBySearch(employees, searchInput));
  }, [searchInput, employees]);

  useEffect(() => {
    const dataToSort = dataToDisplay;
    const sortedData = ascendingSort(dataToSort, currentDataType, prevId);
    const myEmployees = getEmployeeToDisplay(sortedData, startIndex);

    setData(myEmployees);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endIndex]);

  /**
   * Update the counter, prevId and type before lauching the sort function
   * @param {*} counter
   * @param {*} id
   * @param {*} type
   */
  function handleSort(counter, id, type) {
    setClickCounter(counter);
    setPrevId(id);
    setCurrentDataType(type);
  }

  return (
    <section className="employee-table">
      <header className="employee-table__header">
        <div className="employee-table__header__entries">
          <p>Show</p>
          <select
            className="select"
            onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <p>entries</p>
        </div>
        <div className="employee-table__header__search">
          <label htmlFor="search">Search:</label>
          <input
            className="search-input"
            id="search"
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </header>

      <div className="table">
        <div className="table__header">
          <ul className="table__header__content">
            {tableHeaders.map((header) => {
              return (
                <TableHeader
                  key={header.id}
                  id={header.id}
                  title={header.headerTitle}
                  prevId={prevId}
                  clickCounter={clickCounter}
                  handleSort={handleSort}
                  type={header.type}
                />
              );
            })}
          </ul>
        </div>
        <div className="table__content">
          {dataToDisplay.length === 0 ? (
            <div className="table__content__empty">
              <p className="empty-text">No data available in table</p>
            </div>
          ) : (
            <Suspense fallback={renderLoader()}>
              {data.map((employee, key = { startIndex }) => {
                key++;
                return <EmployeeCard key={key} employee={employee} />;
              })}
            </Suspense>
          )}
        </div>
      </div>
      <TableFooter
        entriesPerPage={entriesPerPage}
        lastEmployeeIndex={lastEmployeeIndex}
        numberEntries={numberEntries}
        startIndex={startIndex}
        handleChangePage={(newStartIndex) => setStartIndex(newStartIndex)}
        pageNumber={pageNumber}
        handlePageNumber={(number) => handlePageNumber(number)}
      />
    </section>
  );
};

Table.propTypes = {
  employees: PropTypes.array,
};

export default Table;
