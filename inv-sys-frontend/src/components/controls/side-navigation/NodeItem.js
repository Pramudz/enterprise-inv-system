import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function NodeItem(props) {
  console.log("Hello Sri lanka");
  const { parentItem, nodeItem, subItem } = props;

  const subItemlist = [];
  const nodeItemlist = [];

  const getSubItem = () => {
    for (var i = 0; i < subItem.length; i++) {
      let data = subItem[i];

      if (data.parntid === parentItem.funcid) {
        subItemlist.push(data);
      }
    }
  };

  const getNodeItem = () => {
    for (var i = 0; i < nodeItem.length; i++) {
      let data = nodeItem[i];

      if (data.parntid === parentItem.funcid) {
        nodeItemlist.push(data);
      }
    }
  };

  const createSubNodeTree = () => {
    console.log("sub item length -->", subItemlist.length);
    getSubItem();
    getNodeItem();

    console.log("sub item length -->", subItemlist.length);

    if (subItemlist.length > 0) {
      subItemlist.map((data) => {
        return (
          <NodeItem
            parentItem={data}
            nodeItem={nodeItemlist}
            subItem={subItemlist}
          />
        );
      });
    }
  };

  console.log("sub Node-->", createSubNodeTree());

  return {
    title: `${parentItem.funcname}`,
    icon: <FiberManualRecordIcon />,
    items: [createSubNodeTree],
  };
}

export default NodeItem;
