import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectCombo = (props) => {
  const { labelName, value, name, onChange, items } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{labelName}</InputLabel>
      <Select label={labelName} value={value} name={name} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCombo;
