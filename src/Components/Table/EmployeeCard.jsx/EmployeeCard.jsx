const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-info">
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
};

export default EmployeeCard;
