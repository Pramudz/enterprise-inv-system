import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },

  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

const PageHeader = (props) => {
  const styleClass = useStyles();
  const { icon, pageTitle, pageDescription } = props;
  return (
    <Paper elevation={0} square className={styleClass.root}>
      <div className={styleClass.PageHeader}>
        <Card className={styleClass.pageIcon}>{icon}</Card>

        <div className={styleClass.pageTitle}>
          <Typography variant="h5" component="div">
            {pageTitle}
          </Typography>

          <Typography variant="subtitle2" component="div">
            {pageDescription}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
