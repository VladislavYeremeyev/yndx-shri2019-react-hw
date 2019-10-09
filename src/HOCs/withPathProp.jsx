import React from "react";

const withPathProp = (WrappedComponent, repo) => {
	return class extends React.PureComponent {
		render() {
			let { path } = this.props.match.params;
			return <WrappedComponent repo={repo} path={path} />;
		}
	};
};

export default withPathProp;
