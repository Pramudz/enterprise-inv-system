import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useFormState = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    handleInputChange,
    setValues,
    errors,
    setErrors,
    resetForm,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const styleClasses = useStyles();
  const { children, ...other } = props;
  return (
    <form className={styleClasses.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};

export { useFormState, Form };
