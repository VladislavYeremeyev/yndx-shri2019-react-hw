import React from "react";
import { cn } from "@bem-react/classname";
import "./Header.css";
import "./../TabMenu/TabMenu.css";
import HeaderLogo from "./Logo/Header-Logo";
import HeaderMenu from "./Menu/Header-Menu";
import Text from "../Text/Text";
import DropdownBlock from "../DropdownBlock/DropdownBlock";

function Header(props) {
	return (
		<div
			className={`Header ${props.mix ? cn(props.mix[0])(props.mix[1]) : ""}`}
		>
			<HeaderLogo/>
			<HeaderMenu mix={["TabMenu"]}>
				<DropdownBlock items={props.repos}>
					<div className="TabMenu-Tab TabMenu-Tab_active">
						<Text>
							<strong>Repository</strong> {props.repos ? props.repos[0] : ''}
						</Text>
					</div>
				</DropdownBlock>
			</HeaderMenu>
		</div>
	);
}

export default Header;
