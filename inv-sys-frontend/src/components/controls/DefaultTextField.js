import React from "react";
import { TextField } from "@material-ui/core";

const DefaultTextField = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    variant,
    errMessege = null,
    ...other
  } = props;

  return (
    <TextField
      name={name}
      variant={variant}
      label={label}
      value={value}
      onChange={onChange}
      {...(errMessege && { error: true, helperText: errMessege })}
      {...other}
    />
  );
};

export default DefaultTextField;
