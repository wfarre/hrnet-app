import React, { lazy, Suspense, useState } from "react";

import { checkInputsOnSubmit } from "../utils/validation";

import { ReactComponent as Arrow } from "../assets/images/arrow-right-solid.svg";
import { ReactComponent as Save } from "../assets/images/save-icon.svg";
// import Form from "../Components/Form/Form";
// import Modal from "../Components/Modal/Modal";
import LinkButton from "../Components/Buttons/LinkButton";

const Form = lazy(() => import("../Components/Form/Form"));
const Modal = lazy(() => import("../Components/Modal/Modal"));

/**
 * React page Home ( Create employee)
 * @return the rendering of my home page
 */
const Home = () => {
  document.title = "HRnet - Create an employee";

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

  /**
   * submit the form when click on the submit button
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    const { formIsValid, errors } = checkInputsOnSubmit(newEmployee);

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
          <LinkButton
            path={"/current-employees"}
            btnText={"View Current Employees "}
            icon={<Arrow className="icon icon--arrow" />}
            dataTestId="btn-employees"
          />
          <h2 className="title">Create Employee</h2>
          <Suspense>
            <Form
              setNewEmployee={(input, type) =>
                setNewEmployee({ ...newEmployee, [type]: input })
              }
              errorMsg={errorMsg}
              newEmployee={newEmployee}
            />
          </Suspense>

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
      <Suspense>
        <Modal
          text={"Employee Created"}
          modalOpen={modalOpen}
          handleModal={(newModalState) => handleModal(newModalState)}
        />
      </Suspense>
    </div>
  );
};

export default Home;
