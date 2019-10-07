import React from "react";
import CodeContainer from "./../CodeContainer/CodeContainer";
import CodeBlock from "./../CodeBlock/CodeBlock";
import { cn } from "@bem-react/classname";
import { getFileData } from "../../Store/requests.js";
import * as actions from "../../Store/Actions.js";
import { connect } from "react-redux";
import { pathToName } from "../../helper/helper.js";

class Blob extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: "detais",
			content: []
		};

		this.onChangeTab = this.onChangeTab.bind(this);
	}

	onChangeTab(name) {
		this.setState({ activeTab: name });
	}

	componentDidMount() {
		let { repoName, path } = this.props;

		getFileData("redux-thunk", path).then(res => {
			this.setState({ content: res.split("\n") });
		});
	}

	render() {
		let { content } = this.state;
		let fileName = pathToName(this.props.path);
		return (
			<div className={cn("Layout-Container")({ expand: true })}>
				<CodeContainer name={fileName}>
					<CodeBlock codeLines={content} />
				</CodeContainer>
			</div>
		);
	}
}

export default connect(
	state => ({
		repoName: state.repoName
	}),
	actions
)(Blob);
