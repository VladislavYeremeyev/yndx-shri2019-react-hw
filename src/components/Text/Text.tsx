import React from "react";
import { cn } from "@bem-react/classname";

import "./_size/Text_size_xxxs.css";
import "./_size/Text_size_xs.css";
import "./_size/Text_size_xl.css";
import "./_color/Text_color_secondary.css";

type textMods = {
	size?: string;
	color?: string;
}

interface textProps {
	mod?: textMods;
	children: JSX.Element | JSX.Element[] | string;
}

function Text(props: textProps) {
  return (
    <div className={`Text${props.mod ? " " + cn("Text")(props.mod) : ""}`}>
      {props.children}
    </div>
  );
}

export default Text;
