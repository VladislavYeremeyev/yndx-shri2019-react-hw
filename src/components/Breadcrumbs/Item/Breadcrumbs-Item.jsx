import React from "react";
import "./Breadcrumbs-Item.css";
import { Link } from "react-router-dom";

function BreadcrumbsItem(props) {
	return (
		<li className="Breadcrumbs-Item">
			<Link className="Link" to={props.href}>{props.children}</Link>
		</li>
	);
}

export default BreadcrumbsItem;
