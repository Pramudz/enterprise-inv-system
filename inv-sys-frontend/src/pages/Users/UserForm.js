import React, { useEffect } from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useFormState, Form } from "../../components/useFormState";
import DefaultTextField from "../../components/controls/DefaultTextField";

const intialValues = {
  id: 0,
  firstName: "Kanchana",
  lastName: "Gunathilake",
  userName: "",
  dob: "",
  city: "",
  contactNum: "",
  email: "",
  roles: [],
  passowrd: "",
  lastLoging: "",
  activeStatus: false,
  loginStatus: false,
  gender: "female",
};

const UserForm = () => {
  const { values, handleInputChange } = useFormState(intialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <DefaultTextField
            fieldName="firstName"
            labelValue="First Name"
            fieldValue={values.firstName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            name="userName"
            label="User Name"
            value={values.userName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
};
export default UserForm;
