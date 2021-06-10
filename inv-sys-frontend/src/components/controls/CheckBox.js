import React from "react";
import { FormControlLabel, FormControl, Checkbox } from "@material-ui/core";

const CheckBox = (props) => {
  const { name, labelName, value, onChange, disableStatus, color } = props;

  const convertToDefaultEvent = (name, value) => ({
    target: {
      name: name,
      value: value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        disabled={disableStatus}
        control={
          <Checkbox
            name={name}
            checked={value}
            color={color}
            onChange={(e) =>
              onChange(convertToDefaultEvent(name, e.target.checked))
            }
          />
        }
        label={labelName}
      />
    </FormControl>
  );
};
export default CheckBox;
