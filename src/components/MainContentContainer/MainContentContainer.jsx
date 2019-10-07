import React from "react";
import { cn } from "@bem-react/classname";
import "./MainContentContainer.css";

function MainContentContainer(props) {
	return (
		<div
			className={`MainContentContainer ${
				props.mix ? cn(props.mix[0])(props.mix[1]) : ""
			}`}
		>
			{props.children}
		</div>
	);
}

export default MainContentContainer;
