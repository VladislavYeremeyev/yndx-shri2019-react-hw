import React from "react";
import { cn } from "@bem-react/classname";

import "./Link.css";
import "./_color/Link_color_blue.css";

type linkMods = {
	color: string;
}

interface linkProps {
	href: string;
	children: JSX.Element | string;
	mod: linkMods;
}

function Link(props: linkProps) {
  return (
    <a
      className={`Link ${props.mod ? cn("Link")(props.mod) : ""}`}
      href={props.href ? props.href : "#"}
    >
      {props.children}
    </a>
  );
}

export default Link;
