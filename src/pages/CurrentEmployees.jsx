import { Link } from "react-router-dom";
import "./CurrentEmployee.css";
import { useEffect, useMemo, useState } from "react";

const CurrentEmployees = () => {
  const [numberEntries, setNumberEntries] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const employees = useMemo(() => {
    const employees = [
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Kill",
        lastName: "Bill",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Hello",
        lastName: "Kill",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Marie",
        lastName: "Poil",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Bill",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
    ];
    return employees;
  }, []);

  useEffect(() => {
    function getEmployeeToDisplay(data, startIndex) {
      let newArray = [];
      const stopIndex =
        numberEntries < startIndex + entriesPerPage
          ? numberEntries
          : startIndex + entriesPerPage;
      for (let i = startIndex; i < stopIndex; i++) {
        newArray.push(data[i]);
      }
      return newArray;
    }
    setData(getEmployeeToDisplay(employees, startIndex));
  }, [startIndex, employees, entriesPerPage, numberEntries]);

  useEffect(() => {
    setNumberEntries(employees.length);
  }, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <section className="employee-table">
        <header className="employee-table__header">
          <div className="employee-table__header__entries">
            <p>Show</p>
            <select
              className="select"
              onChange={(e) => setEntriesPerPage(e.target.value)}
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <p>entries</p>
          </div>
          <div className="employee-table__header__search">
            <label htmlFor="search">Search:</label>
            <input className="search-input" id="search" type="text" />
          </div>
        </header>

        <div className="table">
          <div className="table__header">
            <ul className="table__header__content">
              <li className="table__header__content__item">
                First
                <br />
                Name
              </li>
              <li className="table__header__content__item">
                Last
                <br />
                Name
              </li>
              <li className="table__header__content__item">
                Start
                <br />
                Date
              </li>
              <li className="table__header__content__item">Department</li>
              <li className="table__header__content__item">
                Date of
                <br />
                Birth
              </li>
              <li className="table__header__content__item">Street</li>
              <li className="table__header__content__item">City</li>
              <li className="table__header__content__item">State</li>
              <li className="table__header__content__item">
                Zip
                <br />
                Code
              </li>
            </ul>
          </div>
          <div className="table__content">
            <div className="table__content__empty">
              <p className="empty-text">No data available in table</p>
            </div>

            {data.map((employee, key = { startIndex }) => {
              key++;
              return (
                <div className="employee-info" key={key}>
                  <div className="employee-info__item">
                    <p>{employee.firstName}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.lastName}</p>
                  </div>
                  <div className="employee-info__itme">
                    <p>{employee.startDate}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.department}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.dateOfBirth}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.street}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.city}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.state}</p>
                  </div>
                  <div className="employee-info__item">
                    <p>{employee.zipCode}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="employee-info" id="1">
              <div className="employee-info__item">
                <p>Arnold</p>
              </div>
              <div className="employee-info__item">
                <p>hey</p>
              </div>
              <div className="employee-info__itme">
                <p>10/12/2022</p>
              </div>
              <div className="employee-info__item">
                <p>43</p>
              </div>
              <div className="employee-info__item">
                <p>12/08/1990</p>
              </div>
              <div className="employee-info__item">
                <p>Hello St</p>
              </div>
              <div className="employee-info__item">
                <p>New York</p>
              </div>
              <div className="employee-info__item">
                <p>Alabama</p>
              </div>
              <div className="employee-info__item">
                <p>503</p>
              </div>
            </div> */}
          </div>

          {/* <table className="table">
          <thead className="table__header">
            <tr className="table__header__content">
              <th className="table__header__content__item">First Name</th>
              <th className="table__header__content__item">Last Name</th>
              <th className="table__header__content__item">Start Date</th>
              <th className="table__header__content__item">Department</th>
              <th className="table__header__content__item">Date of Birth</th>
              <th className="table__header__content__item">Street</th>
              <th className="table__header__content__item">City</th>
              <th className="table__header__content__item">State</th>
              <th className="table__header__content__item">Zip Code</th>
            </tr>
          </thead>
          <tbody >
            <tr className="table__content data__content--nodata">
              <td>No data available in table</td>
            </tr>
            <tr>
              <td className="employee-info__first-name">
                <p>Arnold</p>
              </td>
              <td className="employee-info__last-name">
                <p>hey</p>
              </td>
              <td className="employee-info__start-data">
                <p>10/12/2022</p>
              </td>
              <td className="employee-info__department">
                <p>43</p>
              </td>
              <td className="employee-info__birth">
                <p>12/08/1990</p>
              </td>
              <td className="employee-info__street">
                <p>Hello St</p>
              </td>
              <td className="employee-info__city">
                <p>New York</p>
              </td>
              <td className="employee-info__state">
                <p>Alabama</p>
              </td>
              <td className="employee-info__zipcode">
                <p>503</p>
              </td>
            </tr>
          </tbody> */}
          {/* <div className="table__content">
            <div className="employee-info">
              <div className="employee-info__first-name">
                <p>Arnold</p>
              </div>
              <div className="employee-info__last-name">
                <p>hey</p>
              </div>
              <div className="employee-info__start-data">
                <p>10/12/2022</p>
              </div>
              <div className="employee-info__department">
                <p>43</p>
              </div>
              <div className="employee-info__birth">
                <p>12/08/1990</p>
              </div>
              <div className="employee-info__street">
                <p>Hello St</p>
              </div>
              <div className="employee-info__city">
                <p>New York</p>
              </div>
              <div className="employee-info__state">
                <p>Alabama</p>
              </div>
              <div className="employee-info__zipcode">
                <p>503</p>
              </div>
            </div>
          </div> */}
        </div>

        <footer className="employee-table__footer">
          <div className="employee-table__footer__index">
            <p>
              Showing {startIndex} to{" "}
              {startIndex + entriesPerPage >= numberEntries
                ? numberEntries
                : startIndex + entriesPerPage}
              of {numberEntries} entries
            </p>
          </div>
          <div className="employee-table__footer__tablenav">
            <button
              className="nav-btn nav-btn--prev"
              onClick={() =>
                startIndex - entriesPerPage < 0
                  ? setStartIndex(startIndex)
                  : setStartIndex(startIndex - entriesPerPage)
              }
            >
              Previous
            </button>
            <button
              className="nav-btn nav-btn--next"
              onClick={() =>
                startIndex + entriesPerPage > numberEntries
                  ? setStartIndex(startIndex)
                  : setStartIndex(startIndex + entriesPerPage)
              }
            >
              Next
            </button>
          </div>
        </footer>
      </section>
      {/* <table id="employee-table" class="display"></table> */}
      <Link to="/">Home</Link>
    </div>
  );
};

export default CurrentEmployees;
