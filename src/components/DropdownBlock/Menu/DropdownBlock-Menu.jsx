import React from "react";
import "./DropdownBlock-Menu.css";
import "./../MenuHandle/DropdownBlock-MenuHandle.css";
import "./../HandleBar/DropdownBlock-HandleBar.css";
import "./_view/DropdownBlock-Menu_view_branches.css";
import DropdownBlockMenuItem from "./../MenuItem/DropdownBlock-MenuItem";

function DropdownBlockMenu(props) {
	return (
		<ul
			className={`DropdownBlock-Menu ${
				props.view === "branches" ? "DropdownBlock-Menu_view_branches" : ""
			}`}
		>
			<div className="DropdownBlock-MenuHandle">
				<div className="DropdownBlock-HandleBar"></div>
			</div>
			{props.view === "branches"
				? [
						{ branch: "users/rudskoy/DEVTOOLS-43865", update: "Jan 11, 12:01" },
						{ branch: "users/rudskoy/DEVTOOLS-43865", update: "Jan 11, 12:01" },
						{ branch: "users/rudskoy/DEVTOOLS-43865", update: "Jan 11, 12:01" }
					].map((elem, i) =>
						i === 1 ? (
							<React.Fragment key={i}>
								<div className="DropdownBlock-Delimeter"></div>
								<DropdownBlockMenuItem>
									<div className="DropdownBlock-BranchName">{elem.branch}</div>
									<div className="DropdownBlock-LastUpdate">
										Last commit on {elem.update}
									</div>
								</DropdownBlockMenuItem>
							</React.Fragment>
						) : (
							<DropdownBlockMenuItem mod={{current: i === 0}} key={i}>
								<div className="DropdownBlock-BranchName">{elem.branch}</div>
								<div className="DropdownBlock-LastUpdate">
									Last commit on {elem.update}
								</div>
							</DropdownBlockMenuItem>
						)
				  )
				: ["Arc", "My repository", "Devtools-team repository"].map(
						(elem, i) => (
							<DropdownBlockMenuItem key={i}>{elem}</DropdownBlockMenuItem>
						)
				  )}
		</ul>
	);
}

export default DropdownBlockMenu;
