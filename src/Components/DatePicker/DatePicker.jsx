import * as React from "react";
import { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import PropTypes from "prop-types";
import DatePickerC from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

/**
 * React componenet DatePicker
 * @param {*} param0
 * @returns DatePicker component
 */
const DatePicker = ({ handleDate, name, value }) => {
  const [dateValue, setDateValue] = useState();

  const handleChange = (newValue) => {
    setDateValue(newValue);
    handleDate(newValue);
  };

  useEffect(() => {
    if (value === "") {
      setDateValue("");
    }
  }, [value]);

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <Stack spacing={3}>
    //     <DesktopDatePicker
    //       className="date-picker"
    //       inputFormat="DD/MM/YYYY"
    //       value={value === null ? "06/09/2022" : value}
    //       onChange={handleChange}
    //       renderInput={(params) => <TextField {...params} />}
    //     />
    //   </Stack>
    // </LocalizationProvider>
    <DatePickerC
      name={name}
      id={name}
      className="date-picker"
      selected={dateValue}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/mm/yyyy"
    />
  );
};

DatePicker.propTypes = {
  handleDate: PropTypes.func,
};

export default DatePicker;
