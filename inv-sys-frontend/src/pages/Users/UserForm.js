import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useFormState, Form } from "../../components/useFormState";
import DefaultTextField from "../../components/controls/DefaultTextField";
import DefaultRadioGroup from "../../components/controls/DefaultRadioGroup";
import MultiSelectCombo from "../../components/controls/MultiSelectCombo";
import SelectCombo from "../../components/controls/SelectCombo";
import DatePicker from "../../components/controls/DatePicker";
import CheckBox from "../../components/controls/CheckBox";
import FormButton from "../../components/controls/FormButton";
import SaveIcon from "@material-ui/icons/Save";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const roleItems = [
  { id: "1", name: "Manger" },
  { id: "2", name: "Cashier" },
  { id: "3", name: "Supervisor" },
];

const locations = [
  { id: "1", name: "Moratuwa" },
  { id: "2", name: "Panadura" },
  { id: "3", name: "wattala" },
];
const intialValues = {
  id: 0,
  firstName: "Kanchana",
  lastName: "Gunathilake",
  userName: "",
  location: "",
  dob: null,
  city: "",
  contactNum: "",
  email: "",
  roles: [],
  passowrd: "12345678",
  lastLogin: "2021-04-10",
  activeStatus: false,
  loginStatus: true,
  gender: "female",
};

const UserForm = () => {
  const { values, handleInputChange, errors, setErrors } = useFormState(
    intialValues
  );

  const validateForm = () => {
    let temp = {};
    temp.firstName = values.firstName ? "" : "This Field is Required";
    temp.lastName = values.lastName ? "" : "This Field is Required";
    temp.userName = values.userName ? "" : "This Field is Required";
    temp.email = /$^|.*@.*..*/.test(values.email) ? "" : "Email is not Valid";
    temp.contactNum =
      values.contactNum.length > 9 ? "" : "Contact Number is not Valid";
    temp.location =
      values.location.length !== 0 ? "" : "This Field is Required";

    setErrors({
      ...temp,
    });
    const testValue = (inputValue) => inputValue === "";
    return Object.values(temp).every(testValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) window.alert("Hi");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <DefaultTextField
            variant="outlined"
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleInputChange}
            errMessege={errors.firstName}
          />
          <DefaultTextField
            variant="outlined"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            errMessege={errors.lastName}
          />

          <DefaultTextField
            variant="outlined"
            name="userName"
            label="User Name"
            value={values.userName}
            onChange={handleInputChange}
            errMessege={errors.userName}
          />
          <DefaultTextField
            variant="outlined"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            errMessege={errors.email}
          />

          <DatePicker
            name="dob"
            labelName="Date of Birth"
            value={values.dob}
            onChange={handleInputChange}
          />

          <DefaultTextField
            variant="outlined"
            name="city"
            label="Living City"
            value={values.city}
            onChange={handleInputChange}
            errMessege={errors.city}
          />
          <DefaultTextField
            variant="outlined"
            name="contactNum"
            label="Contact Number"
            value={values.contactNum}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DefaultRadioGroup
            formLabelName="Gender"
            radioGroupName="gender"
            radioGroupValue={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <MultiSelectCombo
            labelName="Roles"
            selectName="roles"
            items={roleItems}
          />

          <SelectCombo
            labelName="Outlet Name"
            value={values.location}
            name="location"
            onChange={handleInputChange}
            items={locations}
          />
          <DefaultTextField
            variant="outlined"
            disabled
            name="lastLogin"
            label="Last Login Date"
            value={values.lastLogin}
            onChange={handleInputChange}
          />

          <DefaultTextField
            name="password"
            value={values.passowrd}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <CheckBox
            name="activeStatus"
            value={values.activeStatus}
            labelName="Active/Inactive"
            onChange={handleInputChange}
            disableStatus={false}
            color="secondary"
          />

          <CheckBox
            name="loginStatus"
            value={values.loginStatus}
            labelName="Login Status"
            onChange={handleInputChange}
            disableStatus={true}
            color="primary"
          />

          <div>
            <FormButton
              type="submit"
              buttonName="Save"
              size="large"
              color="primary"
              variant="contained"
              startIcon={<SaveIcon />}
            />

            <FormButton
              buttonName="Reset"
              size="large"
              color="default"
              variant="contained"
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};
export default UserForm;
