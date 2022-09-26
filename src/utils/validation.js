/**
 * This function will check if there is a an error in the form
 * @param {Object} newEmployee
 * @returns booleans: true if the number of errors is zero, false if there is at least one error
 * @returns object of errors
 */
export const checkInputsOnSubmit = (newEmployee) => {
  let errors = {};
  let errorCounter = 0;
  let formIsValid = false;

  for (const key in newEmployee) {
    if (`${newEmployee[key]}` === "") {
      errors = { ...errors, [key]: "*required field" };
      errorCounter++;
    } else if (
      !checkName(`${newEmployee[key]}`) &&
      (key === "lastName" || key === "firstName")
    ) {
      errors = { ...errors, [key]: "Invalid input" };
      errorCounter++;
    } else if (key === "zipCode") {
      if (!checkZipCode(`${newEmployee[key]}`)) {
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
};

/**
 * check if input name is correct
 * @param {string} name
 * @returns boolean
 */
const checkName = (name) => {
  let textPattern = /^[A-Za-z][A-Za-z0-9_-]{1,29}$/;
  return name.match(textPattern);
};

/**
 * check if the zipCode is correct i.e. number with 5 digits
 * @param {string} zipCode
 * @returns boolean
 */
const checkZipCode = (zipCode) => {
  let zipCodePattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  const zipCodeInt = parseInt(zipCode);
  return zipCodePattern.test(zipCodeInt);
};
