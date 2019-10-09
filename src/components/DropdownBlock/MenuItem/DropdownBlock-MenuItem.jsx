import React from "react";
import "./DropdownBlock-MenuItem.css";
import "./_current/DropdownBlock-MenuItem_current.css";
import { cn } from "@bem-react/classname";

function DropdownBlockMenuItem(props) {
  return (
    <li
      onClick={props.onClick}
      className={`${
        props.mod
          ? cn("DropdownBlock-MenuItem")(props.mod)
          : cn("DropdownBlock-MenuItem")()
      }`}
    >
      {props.children}
    </li>
  );
}

export default DropdownBlockMenuItem;
