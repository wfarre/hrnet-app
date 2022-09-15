import { Select } from "select-react-component/dist";
import { states } from "../assets/data/statesData";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../Components/Modal/Modal";
import Button from "../Components/Button/Button";

import { ReactComponent as Arrow } from "../assets/images/arrow-right-solid.svg";
import { ReactComponent as Save } from "../assets/images/save-icon.svg";

import DatePicker from "../Components/DatePicker/DatePicker";

// const Form = ({ errorMsg }) => {
//   const [newEmployee, setNewEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     startDate: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     department: "",
//   });

// const handleChange = () => {

// }

//   return (
//     <form action="#" id="create-employee">
//       <label className="label" htmlFor="first-name">
//         First Name
//       </label>
//       <input
//         type="text"
//         id="first-name"
//         className="input"
//         value={newEmployee.firstName}
//         onChange={(e) =>
//           setNewEmployee({ ...newEmployee, firstName: e.target.value })
//         }
//       />
//       <span className="error-message">{errorMsg.firstName}</span>

//       <label className="label" htmlFor="last-name">
//         Last Name
//       </label>
//       <input
//         type="text"
//         id="last-name"
//         className="input"
//         value={newEmployee.lastName}
//         onChange={(e) =>
//           setNewEmployee({ ...newEmployee, lastName: e.target.value })
//         }
//       />
//       <span className="error-message">{errorMsg.lastName}</span>

//       <label className="label" htmlFor="date-of-birth">
//         Date of Birth
//       </label>
//       <DatePicker
//         className="input"
//         value={newEmployee.dateOfBirth}
//         handleDate={(date) => {
//           const newDateValue = new Date(date).toLocaleDateString();
//           setNewEmployee({ ...newEmployee, dateOfBirth: newDateValue });
//         }}
//       />
//       <span className="error-message">{errorMsg.startDate}</span>

//       <label className="label" htmlFor="start-date">
//         Start Date
//       </label>
//       <DatePicker
//         className="input"
//         value={newEmployee.startDate}
//         handleDate={(date) => {
//           const newDateValue = new Date(date).toLocaleDateString();
//           setNewEmployee({ ...newEmployee, startDate: newDateValue });
//         }}
//       />
//       <span className="error-message">{errorMsg.dateOfBirth}</span>

//       <fieldset className="address">
//         <legend>Address</legend>

//         <label className="label" htmlFor="street">
//           Street
//         </label>
//         <input
//           id="street"
//           type="text"
//           className="input"
//           value={newEmployee.street}
//           onChange={(e) =>
//             setNewEmployee({ ...newEmployee, street: e.target.value })
//           }
//         />
//         <span className="error-message">{errorMsg.street}</span>

//         <label className="label" htmlFor="city">
//           City
//         </label>
//         <input
//           id="city"
//           type="text"
//           className="input"
//           value={newEmployee.city}
//           onChange={(e) =>
//             setNewEmployee({ ...newEmployee, city: e.target.value })
//           }
//         />
//         <span className="error-message">{errorMsg.city}</span>

//         <label className="label" htmlFor="state">
//           State
//         </label>
//         <Select
//           className="input"
//           data={stateNames}
//           value={newEmployee.state === null ? stateNames[0] : newEmployee.state}
//           handleSelect={(e) => setNewEmployee({ ...newEmployee, state: e })}
//         />
//         <span className="error-message">{errorMsg.state}</span>

//         <label className="label" htmlFor="zip-code">
//           Zip Code
//         </label>
//         <input
//           id="zip-code"
//           type="number"
//           className="input"
//           value={newEmployee.zipCode}
//           onChange={(e) =>
//             setNewEmployee({ ...newEmployee, zipCode: e.target.value })
//           }
//         />
//         <span className="error-message">{errorMsg.zipCode}</span>
//       </fieldset>

//       <label htmlFor="department">Department</label>
//       <Select
//         className="input"
//         name="department"
//         id="department"
//         data={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]}
//         value={
//           newEmployee.department === null ? "Sales" : newEmployee.department
//         }
//         handleSelect={(e) => setNewEmployee({ ...newEmployee, department: e })}
//       />
//       <span className="error-message">{errorMsg.department}</span>
//     </form>
//   );
// };

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const stateNames = states.map((state) => {
    return state.name;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    const { formIsValid, errors } = checkInputsOnSubmit();

    setErrorMsg(errors);
    if (formIsValid) {
      setModalOpen(!modalOpen);
      setNewEmployee({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
      });
    }
  };

  function checkInputsOnSubmit() {
    let errors = {};
    let errorCounter = 0;
    let formIsValid = false;
    let textPattern = /^[A-Za-z][A-Za-z0-9_-]{1,29}$/;
    let zipCodePattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    for (const key in newEmployee) {
      if (`${newEmployee[key]}` === "") {
        errors = { ...errors, [key]: "*required field" };
        errorCounter++;
      } else if (
        !`${newEmployee[key]}`.match(textPattern) &&
        (key === "lastName" || key === "firstName")
      ) {
        errors = { ...errors, [key]: "Invalid input" };
        errorCounter++;
      } else if (key === "zipCode") {
        const zipCode = parseInt(`${newEmployee[key]}`);
        if (!zipCodePattern.test(zipCode)) {
          errors = { ...errors, [key]: "Invalid input" };
          errorCounter++;
        }
      } else {
        errors = { ...errors, [key]: "" };
      }
    }
    console.log(errors);
    if (errorCounter === 0) {
      formIsValid = true;
    }
    return { formIsValid, errors };
  }

  const handleModal = (newModalState) => {
    setModalOpen(newModalState);
  };

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
            />
            <span className="error-message">{errorMsg.firstName}</span>

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
            />
            <span className="error-message">{errorMsg.lastName}</span>

            <label className="label" htmlFor="date-of-birth">
              Date of Birth
            </label>
            <DatePicker
              className="input"
              value={newEmployee.dateOfBirth}
              handleDate={(date) => {
                const newDateValue = new Date(date).toLocaleDateString();
                setNewEmployee({ ...newEmployee, dateOfBirth: newDateValue });
              }}
            />
            <span className="error-message">{errorMsg.startDate}</span>

            <label className="label" htmlFor="start-date">
              Start Date
            </label>
            <DatePicker
              className="input"
              value={newEmployee.startDate}
              handleDate={(date) => {
                const newDateValue = new Date(date).toLocaleDateString();
                setNewEmployee({ ...newEmployee, startDate: newDateValue });
              }}
            />
            <span className="error-message">{errorMsg.dateOfBirth}</span>

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
              />
              <span className="error-message">{errorMsg.street}</span>

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
              />
              <span className="error-message">{errorMsg.city}</span>

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
              />
              <span className="error-message">{errorMsg.state}</span>

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
              />
              <span className="error-message">{errorMsg.zipCode}</span>
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
            />
            <span className="error-message">{errorMsg.department}</span>
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

          {/* <Button btnTitle={Save} icon={<Save />} onClick={handleSubmit} /> */}
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
