import React from "react";
import SideMenu from "../components/SideMenu";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import Users from "../pages/Users/Users";
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
  return (
    <ThemeProvider theme={customisedTheme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Users />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
