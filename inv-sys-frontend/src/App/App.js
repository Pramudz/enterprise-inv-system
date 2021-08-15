import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import Users from "../pages/Users/Users";
import LoginForm from "../pages/Users/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const customisedTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },

    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },

    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "10px",
  },

  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },

  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  const [token, setToken] = useState();

  if (!token) {
    return <LoginForm setToken={setToken} />;
  }

  return (
    <ThemeProvider theme={customisedTheme}>
      <Router>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />

          <Switch>
            <Route exact path="/user" component={Users} />
          </Switch>
        </div>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
