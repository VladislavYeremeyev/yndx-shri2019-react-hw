import React from 'react';
import CodeContainer from '../CodeContainer/CodeContainer';
import CodeBlock from '../CodeBlock/CodeBlock';
import { cn } from '@bem-react/classname';
import { getFileData } from '../../Store/requests';
import * as actions from '../../Store/Actions';
import { connect } from 'react-redux';
import { pathToName } from '../../helper/helper';
import { State } from '../../Store/reducers/Reducer';

type blobProps = {
  path: string;
  repoName: string;
  setFileType: (type: string) => void;
  setPath: (type: string) => void;
};

type blobState = {
  activeTab: string;
  content: string[];
};

class Blob extends React.PureComponent<blobProps, blobState> {
  _isMounted = false;
  constructor(props: blobProps) {
    super(props);

    this.state = {
      activeTab: 'details',
      content: [],
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  linkClickHandler(type: string, path: string) {
    this.props.setFileType(type);
    this.props.setPath(path);
  }

  onChangeTab(name: string) {
    this.setState({ activeTab: name });
  }

  componentDidMount() {
    this._isMounted = true;
    const { repoName, path } = this.props;
    this.linkClickHandler('folder', `tree/${path}`);

    getFileData(repoName, path).then((res) => {
      if (this._isMounted) {
        this.setState({ content: res.split('\n') });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { content } = this.state;
    const fileName = pathToName(this.props.path);
    return (
      <div className={cn('Layout-Container')({ expand: true })}>
        <CodeContainer name={fileName}>
          <CodeBlock codeLines={content} />
        </CodeContainer>
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    repoName: state.repoName,
  }),
  actions
)(Blob);
