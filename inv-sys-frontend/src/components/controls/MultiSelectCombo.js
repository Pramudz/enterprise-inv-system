import React, { useState } from "react";
import {
  FormControl,
  Select,
  Checkbox,
  MenuItem,
  ListItemText,
  Input,
  FormLabel,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const MultiSelectCombo = (props) => {
  const { labelName, selectName, items } = props;
  const [comboValueName, setComboValuename] = useState([]);

  const handleChange = (event) => {
    setComboValuename(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{labelName}</FormLabel>
      <Select
        labelId="mutiple-checkbox-label"
        id="mutiple-checkbox"
        name={selectName}
        multiple
        value={comboValueName}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            <Checkbox checked={comboValueName.indexOf(item.name) > -1} />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectCombo;
