import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "Gray",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  iconbBut: {
    backgroundColor: "white",
  },

  iconButLabel: {
    backgroundColor: "white",
  },
}));

const Header = (props) => {
  const styleClasses = useStyles();
  const history = useHistory();
  const logOut = () => {
    localStorage.clear();
    history.push("/login")
  };

  return (
    <AppBar position="static" className={styleClasses.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item>
            <InputBase
              className={styleClasses.searchInput}
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>

          <Grid item sm></Grid>

          <Grid item>
            <IconButton
              classes={{
                root: styleClasses.iconbBut,
                label: styleClasses.iconButLabel,
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
