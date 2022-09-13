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

export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    console.log("get in it");

    const status = selectEmployees(getState()).status;
    console.log(status);

    if (status === "pending" || status === "updating") {
      return;
    }

    dispatch(actions.fetching());

    console.log("heilo");

    try {
      // on utilise fetch pour faire la requête
      const response = await fetch("../assets/data/employeedata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      await console.log(response);
      const data = await response.json();
      console.log("hello");
      console.log(data);
      let employees = data.map((employee) => {
        return new EmployeeFactory(employee, "json");
      });
      console.log(employees);
      dispatch(actions.resolved(data));
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
