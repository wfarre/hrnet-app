import Employee from "../Models/Employee";

class EmployeeFactory {
  constructor(data, type) {
    if (type === "json") {
      return new Employee(data);
    }
  }
}

export default EmployeeFactory;
