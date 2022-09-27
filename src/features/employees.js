import { createSlice } from "@reduxjs/toolkit";
import EmployeeFactory from "../Factories/EmployeeFactory";

import { selectEmployees } from "../selectors";

const initialState = {
  data: [],
  error: null,
  status: "void",
};

const { actions, reducer } = createSlice({
  name: "employees",
  initialState,
  reducers: {
    fetching: (draft) => {
      setVoidIfUndefined(draft);
      if (draft.status === "void") {
        draft.status = "pending";
        return;
      }
      if (draft.status === "rejected") {
        draft.status = "pending";
        draft.error = null;
        return;
      }
      if (draft.status === "resolved") {
        draft.status = "updating";
        draft.data = [];
        draft.error = null;
        return;
      }
    },
    resolved: (draft, action) => {
      if (draft.status === "updating" || draft.status === "pending") {
        draft.status = "resolved";
        draft.data = action.payload;
        return;
      }
    },
    rejected: (draft, action) => {
      if (draft.status === "updating" || draft.status === "pending") {
        draft.status = "rejected";
        draft.error = action.payload;
        return;
      }
    },
  },
});

/**
 * THe function will fetch the employees from the API (for now, from a json file)
 * @returns array of employees
 */
export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    const status = selectEmployees(getState()).status;
    console.log(status);

    if (status === "pending" || status === "updating") {
      return;
    }

    dispatch(actions.fetching());

    //As we don't have a backend, we use the local storage as a backend
    // let myLocalData = JSON.parse(localStorage.getItem("employeeData"));
    // const employeeData = myLocalData.map((employee) => {
    //   return JSON.parse(JSON.stringify(new EmployeeFactory(employee, "json")));
    // });

    // console.log(employeeData);
    // dispatch(actions.resolved(employeeData));

    // HERE IS THE CODE WITH FETCH ONCE WE GET A BACKEND
    try {
      // on utilise fetch pour faire la requête
      let response = await fetch("../assets/data/employeedata.json", {
        // let response = await fetch("../assets/data/emptydata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      let employees = data.map((employee) => {
        return JSON.parse(
          JSON.stringify(new EmployeeFactory(employee, "json"))
        );
      });

      dispatch(actions.resolved(employees));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
};

/**
 * Create a new employee in the database
 * @param newEmployee
 */
export const createNewEmployee = (newEmployee) => {
  return async (dispatch, getState) => {
    const status = selectEmployees(getState()).status;
    console.log(status);

    if (status === "pending" || status === "updating") {
      return;
    }

    dispatch(actions.fetching());

    // let myLocalData = JSON.parse(localStorage.getItem("employeeData"));
    // const newEmployeeData = [...myLocalData, newEmployee];

    // localStorage.setItem("employeeData", JSON.stringify(newEmployeeData));

    // const employeeData = newEmployeeData.map((employee) => {
    //   return JSON.parse(JSON.stringify(new EmployeeFactory(employee, "json")));
    // });

    // dispatch(actions.resolved(employeeData));

    // HERE IS THE CODE WITH FETCH ONCE WE GET A BACKEND
    try {
      // on utilise fetch pour faire la requête
      const response = await fetch("../assets/data/employeedata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const mynewdata = [...data, newEmployee];
      const employeeData = mynewdata.map((employee) => {
        return JSON.parse(
          JSON.stringify(new EmployeeFactory(employee, "json"))
        );
      });

      dispatch(actions.resolved(employeeData));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
};

function setVoidIfUndefined(draft, credentials) {
  if (draft[credentials] === undefined) {
    draft[credentials] = { status: "void" };
  }
}

export default reducer;
