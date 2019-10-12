import React, { useState } from "react";
import "./DropdownBlock.css";
import "./Overlay/DropdownBlock-Overlay.css";
import "./Delimeter/DropdownBlock-Delimeter.css";
import "./LastUpdate/DropdownBlock-LastUpdate.css";
import "./BranchName/DropdownBlock-BranchName.css";
import "./_opened/DropdownBlock_opened.css";
import "./_color/DropdownBlock_color_pale.css";
import DropdownBlockMenu from "./Menu/DropdownBlock-Menu";
import { cn } from "@bem-react/classname";

type DropdownBlockMods = {
	color: string;
}

interface DropdownBlockProps {
	children: JSX.Element;
	items: string[];
	view: string;
	mix: string[];
	mod: DropdownBlockMods;
}

function DropdownBlock(props: DropdownBlockProps) {
  const openSate = useState(false);
  const isOpen = openSate[0];
  const setOpen = openSate[1];

  return (
    <div
      className={`${
        props.mod ? cn("DropdownBlock")(props.mod) : "DropdownBlock"
      }${props.mix ? " " + cn(props.mix[0])(props.mix[1]) : ""}${
        isOpen ? " " + cn("DropdownBlock")({ opened: true }) : ""
      }`}
      onClick={() => setOpen(!isOpen)}
    >
      {props.children}
      <div className="DropdownBlock-Overlay"></div>
      <DropdownBlockMenu items={props.items} view={props.view} />
    </div>
  );
}

export default DropdownBlock;
