import React from "react";
import {
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
const DefaultRadioGroup = (props) => {
  const {
    formLabelName,
    radioGroupName,
    radioGroupValue,
    onChange,
    items,
  } = props;

  return (
    <FormControl>
      <FormLabel>{formLabelName}</FormLabel>
      <RadioGroup
        row
        name={radioGroupName}
        value={radioGroupValue}
        onChange={onChange}
      >
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.title}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default DefaultRadioGroup;
