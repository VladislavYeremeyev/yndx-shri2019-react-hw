import React from "react";
import "./DirectoryTitle.css";
import "./Name/DirectoryTitle-Name.css";
import "./Branch/DirectoryTitle-Branch.css";
import Text from "../Text/Text";
import DropdownBlock from "../DropdownBlock/DropdownBlock";

function DirectoryTitle(props) {
	return (
		<div className="DirectoryTitle DirectoryTitle_space-t_s">
			<div className="DirectoryTitle-Name">
				<Text mod={{size: "xl"}}>
					<strong>arcadia</strong>
				</Text>
			</div>
			<DropdownBlock mix={["DirectoryTitle-Branch"]} mod={{color: "pale"}} view="branches">
				<Text mod={{size: 'xl', color: 'secondary'}}>trunk</Text>
			</DropdownBlock>
		</div>
	);
}

export default DirectoryTitle;
