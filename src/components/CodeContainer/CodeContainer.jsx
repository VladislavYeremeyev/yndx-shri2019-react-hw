import React from "react";
import { cn } from "@bem-react/classname";
import Icon from "./../Icon/Icon";
import "./CodeContainer.css";

function CodeContainer(props) {
	const codeContainer = cn("CodeContainer");
	return (
		<div className={codeContainer({ border: "all" })}>
			<div className={codeContainer("Header")}>
				<div className={codeContainer("FileInfo")}>
					<Icon mod={{ "space-r": "xs", type: "script" }}></Icon>
					<div>
						<strong>{props.name}</strong>
					</div>
					<div className={codeContainer("BytesSpan")}>(4 347 bytes)</div>
				</div>
				<div className={codeContainer("DownloadIcon")}>
					<Icon mod={{ type: "download" }}></Icon>
				</div>
			</div>
			<div className={codeContainer("CodeBlockContainer")}>
				{props.children}
			</div>
		</div>
	);
}

export default CodeContainer;
