import React from "react";
import "./DirectoryTitle.css";
import "./Name/DirectoryTitle-Name.css";
import "./Branch/DirectoryTitle-Branch.css";
import Text from "../Text/Text";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
const DropdownBlock = loadable(() => import("../DropdownBlock/DropdownBlock"));

function DirectoryTitle(props) {
  const path = useSelector((state) => state.currentPath).split("/");

  return (
    <div className="DirectoryTitle DirectoryTitle_space-t_s">
      <div className="DirectoryTitle-Name">
        <Text mod={{ size: "xl" }}>
          <strong>{path[path.length - 1] || "tree"}</strong>
        </Text>
      </div>
      <DropdownBlock
        mix={["DirectoryTitle-Branch"]}
        mod={{ color: "pale" }}
        view="branches"
      >
        <Text mod={{ size: "xl", color: "secondary" }}>trunk</Text>
      </DropdownBlock>
    </div>
  );
}

export default DirectoryTitle;
