import SideMenu from "../components/SideMenu";
import { connect } from "react-redux";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import LoginForm from "../pages/Users/LoginForm";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import { loginAuthSuccess } from "../redux";
import DefaultLayout from "../pages/DefaultLayout";
import UserForm from "../pages/Users/UserForm"
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


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      localStorage.getItem('USER_KEY') ? <Component {...props} /> : <Redirect to="/login"/>
  )} />
)

function App(props) {
  const classes = useStyles();
  //const userLoggedIn = props.userState;
  // const token = localStorage.getItem("USER_KEY");
  // if (!token) {
  //   return <LoginForm />;
  // }
  return (
    <ThemeProvider theme={customisedTheme}>
      <Router>
        <div className={classes.appMain}>
          <Switch>
            <PrivateRoute exact path="/" component ={LoginForm}/>
            <Route exact path="/login" component={LoginForm} />
            <Route path="/home" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </div>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    userState: state.loggedInUser,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    addUser: (input) => dispatch(loginAuthSuccess(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(App);
