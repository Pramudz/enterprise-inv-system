import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },

  label: {
    textTransform: "none",
  },
}));

const FormButton = (props) => {
  const styleClasses = useStyle();
  const { buttonName, size, color, variant, onClick, icon, ...other } = props;
  return (
    <Button
      classes={{ root: styleClasses.root, label: styleClasses.label }}
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "small"}
      onClick={onClick}
      {...other}
    >
      {buttonName}
    </Button>
  );
};
export default FormButton;
