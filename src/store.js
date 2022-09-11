import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employees";

export default configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
