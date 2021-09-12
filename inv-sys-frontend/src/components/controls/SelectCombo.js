import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const SelectCombo = (props) => {
  const { labelName, value, name, onChange, items, errMessege } = props;

  return (
    <FormControl variant="outlined" {...(errMessege && { error: true })}>
      <InputLabel>{labelName}</InputLabel>
      <Select label={labelName} value={value} name={name} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {errMessege && <FormHelperText>{errMessege}</FormHelperText>}
    </FormControl>
  );
};

export default SelectCombo;
