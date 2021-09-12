import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import AddIcon from "@material-ui/icons/Add";
import StarsIcon from "@material-ui/icons/Stars";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from "axios";
import NodeItem from "./NodeItem";

const color = "#FFFFFF";
const getUser = () => {
  axios
    .get(`/users/1`)
    .then((response) => {
      const data = response.data;
      const roleFunctions = data.role[0].roleFunctions;

      // roleFunctions.map((data) => {
      //   return console.log(data.funcid);
      // });

      let node = [];
      let parent = [];
      let sub = [];

      for (var i = 0; i < roleFunctions.length; i++) {
        let fnct = roleFunctions[i];

        if (fnct.isnode === true) {
          node.push(fnct);
        } else if (fnct.isnode === false && fnct.parntid == null) {
          parent.push(fnct);
        } else if (fnct.isnode === false && fnct.parntid != null) {
          sub.push(fnct);
        }
      }
      console.log("User Role -->", 1 + 1);
      let userRole = parent.map((data, index) => {
        return (
          <NodeItem
            key={index}
            parentItem={data}
            nodeItem={node}
            subItem={sub}
          />
        );
      });

      console.log("User Role -->", userRole);

      return userRole;
    })
    .catch((error) => console.error(`Error:${error}`));
};

// getUser();

const Items = [
  {
    title: "Dashboard",
    icon: <DashboardIcon style={{ color: color }} />,
    path: "/",
  },
  {
    title: "Main Items",
    icon: <StarsIcon style={{ color: color }} />,
    items: [
      {
        title: "Sub root 1",
        icon: <FiberManualRecordIcon style={{ color: color }} />,
        items: [
          {
            title: "Sub item 2",
            path: "/subitem",
            icon: <FiberManualRecordIcon style={{ color: color }} />,
          },
          {
            title: "sub item 2",
            path: "/app/inventory/item_group2",
            icon: <FiberManualRecordIcon style={{ color: color }} />,
          },
        ],
      },
      {
        title: "Sub root 2",
        icon: <FiberManualRecordIcon style={{ color: color }} />,
        items: [
          {
            title: "sub item 1",
            path: "/app/inventory/item_group3",
            icon: <FiberManualRecordIcon style={{ color: color }} />,
          },
        ],
      },
      {
        title: "Create Item Code",
        path: "/app/inventory/create",
        icon: <AddIcon style={{ color: color }} />,
      },
    ],
  },
  {
    title: "User Maintanence",
    icon: <DashboardIcon style={{ color: color }} />,
    items: [
      {
        title: "User Creation",
        path: "/user",
        icon: <FiberManualRecordIcon style={{ color: color }} />,
      },
    ],
  },
];
console.log("Original array -->", Items);
export default Items;
