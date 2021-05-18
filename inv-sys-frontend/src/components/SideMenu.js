import React from "react";
import { makeStyles } from "@material-ui/core";

// by using makeStyle in material ui JSS cssing
const sideMenustyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#4a148c",
  },
});

const SideMenu = () => {
  const styleClass = sideMenustyles();
  console.log(styleClass);
  return <div className={styleClass.sideMenu}></div>;
};
export default SideMenu;
