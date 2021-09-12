import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import SidebarListItem from "./SideNavListItem";
import SideNavItemGroup from "./SideNavGroup";
import Items from "./SideNavData";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "40%",
    height: "30%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1565C0",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideNav() {
  const classes = useStyles();

  let sideNavDataDisplay = Items.map((data, index) => {
    if (data.items) {
      return (
        <SideNavItemGroup
          key={index}
          title={data.title}
          items={data.items}
          icon={data.icon}
          
        />
      );
    }
    return (
      <SidebarListItem
        key={index}
        text={data.title}
        icon={data.icon}
        route={data.path}
      />
    );
  });

  const drawer = (
    <React.Fragment>
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      {sideNavDataDisplay}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default SideNav;
