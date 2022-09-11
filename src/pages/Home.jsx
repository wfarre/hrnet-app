// import "./App.css";
import { Select } from "select-react-component/dist";
import { states } from "../data/statesData";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "../Components/Modal/Modal";

import { ReactComponent as Arrow } from "../arrow-right-solid.svg";
import { ReactComponent as Save } from "../save-icon.svg";

import DatePicker from "../DatePicker";

function Home() {
  // console.log(states);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: null,
    zipCode: "",
    department: null,
  });

  const stateNames = states.map((state) => {
    return state.name;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
    console.log(newEmployee);
    const inputs = document.querySelectorAll(".input");
    console.log(inputs);

    // inputs.forEach((input) => {
    //   if (input.value === "") {
    //     console.log(input.querySelector(".error-message"));
    //   }
    // });
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
          <Link
            to="/current-employees"
            className="button button--employees"
            data-testid="btn-employees"
          >
            View Current Employees{" "}
            <span className="icon-wrapper">
              <Arrow className="icon icon--arrow hide" />
            </span>
          </Link>
          <h2 className="title">Create Employee</h2>
          <form action="#" id="create-employee">
            <label className="label" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="input"
              value={newEmployee.firstName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, firstName: e.target.value })
              }
              required
            />
            <span className="error-message">Please fill this field.</span>

            <label className="label" htmlFor="last-name">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="input"
              value={newEmployee.lastName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, lastName: e.target.value })
              }
              required
            />
            <span className="error-message">Please fill this field.</span>

            <label className="label" htmlFor="date-of-birth">
              Date of Birth
            </label>
            {/* <input id="date-of-birth" type="date" /> */}
            <DatePicker
              // value={empl}
              className="input"
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
              className="input"
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
                className="input"
                value={newEmployee.street}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, street: e.target.value })
                }
                required
              />
              <span className="error-message">Please fill this field.</span>

              <label className="label" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                className="input"
                value={newEmployee.city}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, city: e.target.value })
                }
                required
              />
              <span className="error-message">Please fill this field.</span>

              <label className="label" htmlFor="state">
                State
              </label>
              <Select
                className="input"
                data={stateNames}
                value={
                  newEmployee.state === null ? stateNames[0] : newEmployee.state
                }
                handleSelect={(e) =>
                  setNewEmployee({ ...newEmployee, state: e })
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
                className="input"
                value={newEmployee.zipCode}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, zipCode: e.target.value })
                }
                required
              />
              <span className="error-message">Please fill this field.</span>
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select
              className="input"
              name="department"
              id="department"
              data={[
                "Sales",
                "Marketing",
                "Engineering",
                "Human Resources",
                "Legal",
              ]}
              value={
                newEmployee.department === null
                  ? "Sales"
                  : newEmployee.department
              }
              handleSelect={(e) =>
                setNewEmployee({ ...newEmployee, department: e })
              }
              required
            />
          </form>

          <button
            className="button button--save"
            data-testid="save-btn"
            onClick={handleSubmit}
          >
            Save
            <span className="icon-wrapper">
              <Save className="icon icon--save" />
            </span>
          </button>
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
