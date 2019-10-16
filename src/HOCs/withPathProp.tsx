import React from 'react';
// import { RouteProps } from 'react-router';

interface withPathProps {
  repo: string;
  path: string;
  // RouteProps doesn't work :(
  match: {
    params: {
      path: string;
    };
  };
}

const withPathProp = <T extends withPathProps>(
  WrappedComponent: React.ComponentType<T>,
  repo?: string
): React.ComponentType<withPathProps> => {
  return class extends React.PureComponent<withPathProps> {
    render() {
      const { path } = this.props.match.params;
      return (
        <WrappedComponent {...(this.props as T)} repo={repo} path={path} />
      );
    }
  };
};

export default withPathProp;