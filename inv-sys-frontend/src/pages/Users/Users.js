import React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import UserForm from "./UserForm";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
const Users = () => {
  return (
    <>
      <PageHeader
        icon={<PeopleAltOutlinedIcon fontSize="large" />}
        pageTitle="User Registration Module"
        pageDescription="Users can be registered updated using this Module"
      />
      <UserForm />
      <UserForm />
    </>
  );
};
export default Users;
