import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  const { name, labelName, value, onChange, ...other } = props;

  const convertToDefaultValue = (name, value) => ({
    target: {
      name: name,
      value: value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id="date-picker-dialog"
        label={labelName}
        format="dd-MM-yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultValue(name, date))}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        {...other}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
