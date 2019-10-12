import React from "react";
import CodeContainer from "../CodeContainer/CodeContainer";
import CodeBlock from "../CodeBlock/CodeBlock";
import { cn } from "@bem-react/classname";
import { getFileData } from "../../Store/requests.js";
import * as actions from "../../Store/Actions";
import { connect } from "react-redux";
import { pathToName } from "../../helper/helper.js";

class Blob extends React.PureComponent {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "detais",
      content: [],
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  linkClickHandler(type, path) {
    this.props.setFileType(type);
    this.props.setPath(path);
  }

  onChangeTab(name) {
    this.setState({ activeTab: name });
  }

  componentDidMount() {
    this._isMounted = true;
    let { repoName, path } = this.props;
    this.linkClickHandler("folder", `tree/${path}`);

    getFileData(repoName, path).then((res) => {
      if (this._isMounted) {
        this.setState({ content: res.split("\n") });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
  (state) => ({
    repoName: state.repoName,
  }),
  actions
)(Blob);
