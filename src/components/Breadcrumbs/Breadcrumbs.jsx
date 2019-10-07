import React from "react";
import "./Breadcrumbs.css";
import { cn } from "@bem-react/classname";
import BreadcrumbsItem from "./Item/Breadcrumbs-Item";

function Breadcrumbs(props) {
	return (
		<ul className={props.mod ? cn("Breadcrumbs")(props.mod) : "Breadcrumbs"}>
			{['arcadia', 'trunk'].map((elem, i) => (
				<BreadcrumbsItem key={i} href="https://yandex.ru">		
					{elem}
				</BreadcrumbsItem>
			))}
		</ul>
	);
}

export default Breadcrumbs;
