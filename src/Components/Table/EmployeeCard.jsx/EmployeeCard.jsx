import PropTypes from "prop-types";

/**
 * React Component EmployeeCard
 * @param {*} param0
 * @returns Employee card with all employees informaiton
 */
const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-info">
      <div className="employee-info__item">
        <p>{employee._firstName}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._lastName}</p>
      </div>
      <div className="employee-info__itme">
        <p>{employee._startDate}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._department}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._dateOfBirth}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._street}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._city}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._state}</p>
      </div>
      <div className="employee-info__item">
        <p>{employee._zipCode}</p>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
