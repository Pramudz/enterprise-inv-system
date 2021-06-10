import React from "react";
import { TextField } from "@material-ui/core";

const DefaultTextField = (props) => {
  const { fieldName, labelValue, fieldValue, onChange } = props;

  return (
    <TextField
      name={fieldName}
      variant="outlined"
      label={labelValue}
      value={fieldValue}
      onChange={onChange}
    />
  );
};

export default DefaultTextField;
