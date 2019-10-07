import React from "react";
import "./Header-Menu.css";
import { cn } from "@bem-react/classname";

/* TODO: Use BEM React Core */
function HeaderMenu(props) {
	return (
		<div className={`Header-Menu ${props.mix ? cn(props.mix[0])(props.mix[1]) : ""}`}>{props.children}</div>
	);
}

export default HeaderMenu;
