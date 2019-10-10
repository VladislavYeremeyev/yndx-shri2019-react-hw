import React from "react";
import "./Breadcrumbs.css";
import { cn } from "@bem-react/classname";
import BreadcrumbsItem from "./Item/Breadcrumbs-Item";
import * as actions from "../../Store/Actions.js";
import { connect } from "react-redux";

class Breadcrumbs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: props.path.pathname.split("/").filter((elem) => elem.length !== 0),
    };
  }

  linkClickHandler(path) {
    this.props.setPath(path);
  }

  render() {
    let list = this.props.currentPath
      .split("/")
      .filter((elem) => elem.length !== 0);

    return (
      <ul
        className={
          this.props.mod ? cn("Breadcrumbs")(this.props.mod) : "Breadcrumbs"
        }
      >
        {list.map((elem, i) => (
          <BreadcrumbsItem
            onClick={() => {
              this.linkClickHandler(
                i === 0
                  ? "/"
                  : "/tree/" +
                      list.filter((link, j) => j > 0 && j <= i).join("/")
              );
            }}
            key={i}
            href={
              i === 0
                ? "/"
                : "/tree/" + list.filter((link, j) => j > 0 && j <= i).join("/")
            }
          >
            {elem}
          </BreadcrumbsItem>
        ))}
      </ul>
    );
  }
}

export default connect(
  (state) => ({
    repoName: state.repoName,
    currentPath: state.currentPath,
    fileType: state.fileType,
  }),
  actions
)(Breadcrumbs);
