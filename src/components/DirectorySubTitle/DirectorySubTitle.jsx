import React from "react";
import "./DirectorySubTitle.css";
import Link from "../Link/Link";
import AuthorSpan from "../AuthorSpan/AuthorSpan";

function DirectorySubTitle(props) {
	return (
		<div className="DirectorySubTitle">
			Last commit{" "}
			<Link href="#" mod={{ color: "blue" }}>
				c4d248
			</Link>{" "}
			on{" "}
			<Link href="#" mod={{ color: "blue" }}>
				20 Oct 2017, 12:24
			</Link>{" "}
			by <AuthorSpan>robot-srch-releaser</AuthorSpan>
		</div>
	);
}

export default DirectorySubTitle;
