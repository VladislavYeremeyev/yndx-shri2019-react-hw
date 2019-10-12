import React from "react";
import "./Breadcrumbs-Item.css";
import { Link } from "react-router-dom";

interface Props {
	children: JSX.Element;
	href: string,
	onClick: React.MouseEventHandler<HTMLLIElement>
}

function BreadcrumbsItem(props: Props) {
	return (
		<li onClick={props.onClick} className="Breadcrumbs-Item">
			<Link className="Link" to={props.href}>{props.children}</Link>
		</li>
	);
}

export default BreadcrumbsItem;
