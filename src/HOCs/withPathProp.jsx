import React from "react";

const withPathProp = WrappedComponent => {
	return class extends React.PureComponent {
		render() {
			let { path } = this.props.match.params;
			return <WrappedComponent path={path} />;
		}
	};
};

export default withPathProp;
