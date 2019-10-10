import React from "react";
import "./Icon.css";
import { cn } from "@bem-react/classname";

function Icon(props) {
  return (
    <div className={`${props.mod ? cn("Icon")(props.mod) : cn("Icon")()}`}>
      {props.children}
    </div>
  );
}

export default Icon;
