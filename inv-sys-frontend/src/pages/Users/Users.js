import React from "react";
import PageHeader from "../../components/PageHeader";
import UserForm from "./UserForm";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const Users = () => {
  const styleClasses = useStyles();
  return (
    <>
      <PageHeader
        icon={<PeopleAltOutlinedIcon fontSize="large" />}
        pageTitle="User Registration Module"
        pageDescription="Users can be registered updated using this Module"
      />
      <Paper className={styleClasses.pageContent}>
        <UserForm />
      </Paper>
    </>
  );
};
export default Users;
