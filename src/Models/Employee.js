class Employee {
  constructor(data) {
    this._firstName = data.firstName;
    this._lastName = data.lastName;
    this._startDate = data.startDate;
    this._department = data.department;
    this._dateOfBirth = data.dateOfBirth;
    this._street = data.street;
    this._city = data.city;
    this._state = data.state;
    this._zipCode = data.zipCode;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get startDate() {
    return this._startDate;
  }

  get department() {
    return this._department;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  get street() {
    return this._street;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get zipCode() {
    return this._zipCode;
  }
}

export default Employee;
