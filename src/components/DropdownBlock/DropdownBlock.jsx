import React from "react";
import "./DropdownBlock.css";
import "./Overlay/DropdownBlock-Overlay.css";
import "./Delimeter/DropdownBlock-Delimeter.css";
import "./LastUpdate/DropdownBlock-LastUpdate.css";
import "./BranchName/DropdownBlock-BranchName.css";
import "./_opened/DropdownBlock_opened.css";
import "./_color/DropdownBlock_color_pale.css";
import DropdownBlockMenu from "./Menu/DropdownBlock-Menu";
import { cn } from "@bem-react/classname";

function DropdownBlock(props) {
	return (
		<div className={`${props.mod ? cn("DropdownBlock")(props.mod) : "DropdownBlock"}${props.mix ? ' ' + cn(props.mix[0])(props.mix[1]) : ""}`} onClick={()=> console.log("kek")}>
			{props.children}
			<div className="DropdownBlock-Overlay"></div>
			<DropdownBlockMenu items={props.items} view={props.view}/>
		</div>
	);
}
						
export default DropdownBlock;
