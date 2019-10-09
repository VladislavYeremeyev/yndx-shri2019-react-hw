import React from "react";
import { cn } from "@bem-react/classname";
import "./Grid.css";
import "./Header/Grid-Header.css";
import "./Header/_border/Grid-Header_border_b.css";
import Icon from "./../Icon/Icon";
import Link from "./../Link/Link";
import AuthorSpan from "./../AuthorSpan/AuthorSpan";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions.js";
import { getGitTreeContent } from "../../Store/requests.js";
import { pathToName } from "../../helper/helper.js";
import { Redirect } from 'react-router-dom';

class Grid extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: "files",
			goToBlob: false
		};

		this.onChangeTab = this.onChangeTab.bind(this);
		this.getTree = this.getTree.bind(this);
	}

	onChangeTab(name) {
		this.setState({ activeTab: name });
	}

	getTree() {
		let { setFiles, setLoader, path, repoName } = this.props;
		getGitTreeContent(setFiles, setLoader, repoName, path);
	}

	linkClickHandler(type, path) {
		this.props.setFileType(type);
		this.props.setPath(path);
	}

	componentDidMount() {
		this.linkClickHandler("folder", `tree/${this.props.path}`)
		this.getTree();
	}

	componentDidUpdate(prevProps) {
		let { path, files } = this.props;

		if (prevProps.path !== path) {
			let file = pathToName(path);
			let existFile = files.find(el => el.name === file);

			if (!existFile) {
				this.getTree();
				return;
			}

			let isDir = existFile.isFolder;

			if (isDir) {
				this.getTree();
			} else {
				this.setState({ goToBlob: true });
			}
		}
	}

	render() {
		let pathname = window.location.pathname;
		let fileRoute =
			pathname[pathname.length - 1] === "/" ? pathname : pathname + "/";
		let { goToBlob } = this.state;
		let { path } = this.props;
	
		return goToBlob ? (
			<Redirect to={`/blob/${path}`} />
		) : (
			<div className={`${cn("Grid")()} ${cn("Grid", "Parent")()}`}>
				<div
					className={`${cn("Grid-Header")({ border: "b" })} ${cn("Grid")({
						"m-columns": "12"
					})}`}
				>
					<div className={`${cn("Grid-Fraction")({ "m-col": 2 })}`}>Name</div>
					<div className={`${cn("Grid-Fraction")({ "m-col": 2 })}`}>
						Last commit
					</div>
					<div className={`${cn("Grid-Fraction")({ "m-col": 4 })}`}>
						Commit message
					</div>
					<div className={`${cn("Grid-Fraction")({ "m-col": 2 })}`}>
						Committer
					</div>
					<div
						className={`${cn("Grid-Fraction")({
							"m-col": 2,
							"text-align": "right"
						})}`}
					>
						Updated
					</div>
				</div>
				{this.props.files.length ? (
					this.props.files.map((file, i) => (
						<div
							key={i}
							className={`${cn("Grid-Row")({
								border: i === this.props.files.length - 1 ? "none" : "b"
							})} ${cn("Grid")({
								"m-columns": "12"
							})}`}
						>
							<div
								className={`${cn("Grid-File")()} ${cn("Grid-Fraction")({
									"m-col": 2
								})}`}
							>
								<Icon
									mod={{ "space-r": "xs", type: file.isFolder === true ? "folder" : "script" }}
								/>
								<NavLink
									onClick={() => this.linkClickHandler(file.isFolder === true ? "folder" : "script", fileRoute + file.name)}
									to={fileRoute + file.name}
									className={`${cn("Grid-FileName")(
										file.isFolder === true ? { text: "bold" } : {}
									)}`}
								>
									{file.name}
								</NavLink>
							</div>
							<div
								className={`${cn("Grid-CommitHash")()} ${cn("Grid-Fraction")({
									"m-col": 2
								})}`}
							>
								<Link href="#" mod={{ color: "blue" }}>
									{file.commit}
								</Link>
								<div className={`${cn("Grid-CommitInfo")()}`}>
									{file.commit_info}
								</div>
							</div>
							<div
								className={`${cn("Grid-CommitMessage")()} ${cn("Grid-Fraction")(
									{
										"m-col": 4
									}
								)}`}
							>
								{file.message}
							</div>
							<div
								className={`${cn("Grid-Committer")()} ${cn("Grid-Fraction")({
									"m-col": 2
								})}`}
							>
								<AuthorSpan>{file.committer}</AuthorSpan>
							</div>
							<div
								className={`${cn("Grid-UpdateDate")()} ${cn("Grid-Fraction")({
									"m-col": 2,
									"text-align": "right"
								})}`}
							>
								{file.updated}
							</div>
						</div>
					))
				) : (
					<div>Directory is Empty</div>
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		files: state.allFiles.filter(item =>
			item.name.toUpperCase().includes(state.fileName.toUpperCase())
		),
		repoName: state.repoName,
		fileType: state.fileType,
		currentPath: state.currentPath
	}),
	actions
)(Grid);
