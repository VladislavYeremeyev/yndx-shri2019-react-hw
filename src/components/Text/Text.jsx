import React from "react";
import { cn } from "@bem-react/classname";

import "./_size/Text_size_xxxs.css";
import "./_size/Text_size_xs.css";
import "./_size/Text_size_xl.css";
import "./_color/Text_color_secondary.css";

function Text(props) {
  return (
    <div className={`Text${props.mod ? " " + cn("Text")(props.mod) : ""}`}>
      {props.children}
    </div>
  );
}

export default Text;
