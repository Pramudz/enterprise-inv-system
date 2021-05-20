import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useFormState = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleInputChange,
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
  return <form className={styleClasses.root}>{props.children}</form>;
};

export { useFormState, Form };
