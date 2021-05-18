import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";

const intialValues = {
  id: 0,
  firstName: "",
  lastName: "",
  userName: "",
  dob: "",
  city: "",
  contactNum: "",
  email: "",
  roles: [],
  passowrd: "",
  lastLoging: false,
  activeStatus: false,
  loginStatus: false,
  gender: "",
};

const UserForm = () => {
  const { values, setValue } = useState(intialValues);

  return (
    <form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="First Name"
            value={values.firstName}
          />
          <TextField
            variant="outlined"
            label="Last Name"
            value={values.lastName}
          />
          <TextField variant="outlined" label="Email" value={values.email} />
        </Grid>
        <Grid itme xs={6}></Grid>
      </Grid>
    </form>
  );
};
export default UserForm;
