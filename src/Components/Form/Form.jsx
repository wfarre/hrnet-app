import { states } from "../../assets/data/statesData";
import DatePicker from "../DatePicker/DatePicker";
import { Select } from "select-react-component";
import "./assets/Form.css";
import PropTypes from "prop-types";

/**
 *
 * @param {*} param0 setNewEmployee(function), errroMsg, newEmployee
 * @returns Form components
 */
const Form = ({ setNewEmployee, errorMsg, newEmployee }) => {
  const handleChange = (input, type) => {
    setNewEmployee(input, type);
  };

  const stateNames = states.map((state) => {
    return state.name;
  });

  return (
    <form action="POST" id="create-employee">
      <label className="label" htmlFor="first-name">
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        className="input"
        value={newEmployee.firstName}
        onChange={(e) => handleChange(e.target.value, `firstName`)}
      />
      <span className="error-message">{errorMsg.firstName}</span>

      <label className="label" htmlFor="last-name">
        Last Name
      </label>
      <input
        type="text"
        name="last-name"
        className="input"
        value={newEmployee.lastName}
        onChange={(e) => handleChange(e.target.value, `lastName`)}
      />
      <span className="error-message">{errorMsg.lastName}</span>

      <label className="label" htmlFor="date-of-birth">
        Date of Birth
      </label>
      <DatePicker
        name={"date-of-birth"}
        className={"input"}
        value={newEmployee.dateOfBirth}
        handleDate={(date) => {
          const newDateValue = new Date(date).toLocaleDateString();
          handleChange(newDateValue, `dateOfBirth`);
        }}
      />
      <span className="error-message">{errorMsg.dateOfBirth}</span>

      <label className="label" htmlFor="start-date">
        Start Date
      </label>
      <DatePicker
        name={"start-date"}
        className={"input"}
        value={newEmployee.startDate}
        handleDate={(date) => {
          const newDateValue = new Date(date).toLocaleDateString();
          handleChange(newDateValue, `startDate`);
        }}
      />
      <span className="error-message">{errorMsg.startDate}</span>

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
          onChange={(e) => handleChange(e.target.value, `street`)}
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
          onChange={(e) => handleChange(e.target.value, `city`)}
        />
        <span className="error-message">{errorMsg.city}</span>

        <label className="label" htmlFor="state">
          State
        </label>
        <Select
          className="input"
          data={stateNames}
          value={newEmployee.state === null ? stateNames[0] : newEmployee.state}
          handleSelect={(e) => handleChange(e, `state`)}
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
          onChange={(e) => handleChange(e.target.value, `zipCode`)}
        />
        <span className="error-message">{errorMsg.zipCode}</span>
      </fieldset>

      <label className="label" htmlFor="department">
        Department
      </label>
      <Select
        className="input"
        name="department"
        id="department"
        data={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]}
        value={
          newEmployee.department === null ? "Sales" : newEmployee.department
        }
        handleSelect={(e) => handleChange(e, `department`)}
      />
      <span className="error-message">{errorMsg.department}</span>
    </form>
  );
};

Form.propTypes = {
  setNewEmployee: PropTypes.func,
  errorMsg: PropTypes.object,
  newEmployee: PropTypes.object,
};

export default Form;
