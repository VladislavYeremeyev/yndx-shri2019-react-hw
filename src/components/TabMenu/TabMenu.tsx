import React from "react";
import Text from "../Text/Text";
import { cn } from "@bem-react/classname";

type tabMenuMods = {
	border: string;
};

interface tabMenuProps {
	mix: string[];
	tabs: string[];
	mod: tabMenuMods;
}

function TabMenu(props: tabMenuProps) {
  return (
    <div
      className={`${props.mod ? " " + cn("TabMenu")(props.mod) : ""}${
        props.mix ? " " + cn(props.mix[0])(props.mix[1]) : ""
      }`}
    >
      {props.tabs.map((tab, i) => (
        <div
          key={i}
          className={cn("TabMenu-Tab")(
            i === 0 ? { "space-r": "xxl", active: true } : {}
          )}
        >
          <Text mod={{ size: "xs" }}>
            <strong>{tab}</strong>
          </Text>
        </div>
      ))}
    </div>
  );
}

export default TabMenu;
