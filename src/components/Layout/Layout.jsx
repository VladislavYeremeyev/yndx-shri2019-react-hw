import React from "react";
import "./Layout.css";
import { cn } from "@bem-react/classname";

/* TODO: Use BEM React Core */
function Layout(props) {
	return (
		<div className={`Layout ${props.mix ? cn(props.mix[0])(props.mix[1]) : ""}`}>{props.children}</div>
	);
}

export default Layout;
