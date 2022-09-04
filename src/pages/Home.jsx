// import "./App.css";
import { Select } from "select-react-component/dist";
import { states } from "../data/statesData";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "../Components/Modal/Modal";

import { ReactComponent as Arrow } from "../arrow-right-solid.svg";

import DatePicker from "../DatePicker";

function Home() {
  // console.log(states);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  });

  const stateNames = states.map((state) => {
    return state.name;
  });

  const handleSubmit = () => {
    setModalOpen(!modalOpen);
  };

  const handleModal = (newModalState) => {
    setModalOpen(newModalState);
  };

  useEffect(() => {
    console.log(newEmployee);
  }, [newEmployee]);

  console.log(stateNames);
  return (
    <div className="Home">
      <main className="main">
        <header className="header">
          <h1 className="title header__title">HRnet</h1>
        </header>
        <div className="container">
          <Link to="/current-employees" className="button button--employees">
            View Current Employees{" "}
            {/* <span className="icon-wrapper">
              <Arrow className="icon icon--arrow hide" />
            </span> */}
          </Link>
          <h2 className="title">Create Employee</h2>
          <form action="#" id="create-employee">
            <label className="label" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              value={newEmployee.firstName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, firstName: e.target.value })
              }
              required
            />

            <label className="label" htmlFor="last-name">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              value={newEmployee.lastName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, lastName: e.target.value })
              }
              required
            />

            <label className="label" htmlFor="date-of-birth">
              Date of Birth
            </label>
            {/* <input id="date-of-birth" type="date" /> */}
            <DatePicker
              // value={empl}
              value={newEmployee.dateOfBirth}
              handleDate={(date) => {
                const newDateValue = new Date(date).toLocaleDateString();
                setNewEmployee({ ...newEmployee, dateOfBirth: newDateValue });
              }}
              required
            />

            <label className="label" htmlFor="start-date">
              Start Date
            </label>
            {/* <input id="start-date" type="date" /> */}
            <DatePicker
              // value={newEmployee.firstName}
              value={newEmployee.startDate}
              handleDate={(date) => {
                const newDateValue = new Date(date).toLocaleDateString();
                setNewEmployee({ ...newEmployee, startDate: newDateValue });
              }}
              required
            />

            <fieldset className="address">
              <legend>Address</legend>

              <label className="label" htmlFor="street">
                Street
              </label>
              <input
                id="street"
                type="text"
                value={newEmployee.street}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, street: e.target.value })
                }
                required
              />

              <label className="label" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                value={newEmployee.city}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, city: e.target.value })
                }
                required
              />

              <label className="label" htmlFor="state">
                State
              </label>
              <Select
                data={stateNames}
                // value={newEmployee.state}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, state: e.target.value })
                }
                required
              />
              {/* <select name="state" id="state"></select> */}

              <label className="label" htmlFor="zip-code">
                Zip Code
              </label>
              <input
                id="zip-code"
                type="number"
                value={newEmployee.zipCode}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, zipCode: e.target.value })
                }
                required
              />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select
              name="department"
              id="department"
              data={[
                "Sales",
                "Marketing",
                "Engineering",
                "Human Resources",
                "Legal",
              ]}
              // value={newEmployee.department}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, department: e.target.value })
              }
              required
            />
          </form>

          <button onClick={handleSubmit}>Save</button>
        </div>
      </main>
      <Modal
        text={"Employee Created"}
        modalOpen={modalOpen}
        handleModal={(newModalState) => handleModal(newModalState)}
      />
    </div>
  );
}

export default Home;
