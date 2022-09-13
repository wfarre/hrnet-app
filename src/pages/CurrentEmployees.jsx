import { Link } from "react-router-dom";
import "./CurrentEmployee.css";
import { useEffect, useState } from "react";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { fetchEmployees } from "../features/employees";
import { selectEmployees } from "../selectors";
import { useSelector, useDispatch } from "react-redux";
import Table from "../Components/Table/Table";

const CurrentEmployees = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const employeeData = useSelector(selectEmployees).data;

  useEffect(() => {
    let myEmployees = employeeData.map((employee) => {
      return employee;
    });
    setEmployees(myEmployees);
  }, [employeeData]);

  return (
    <main>
      <div id="employee-div" className="container">
        <header className="page-header">
          <h1 className="page-header__content">Current Employees</h1>
        </header>
        <Table employees={employees} />
        <Link to="/" data-testid="btn-home" className="button button--home">
          Home
          <span className="icon-wrapper">
            <HomeIcon className="icon icon--home" />
          </span>
        </Link>
      </div>
    </main>
  );
};

export default CurrentEmployees;
