import React from 'react';
import './Breadcrumbs.css';
import { cn } from '@bem-react/classname';
import BreadcrumbsItem from './Item/Breadcrumbs-Item';
import * as actions from '../../Store/Actions';
import { connect } from 'react-redux';
import { State } from '../../Store/reducers/Reducer';

type breadcrumbsMods = {
  border: string;
};

type breadcrumbsProps = {
  path: string;
  currentPath: string;
  mod: breadcrumbsMods;
  setPath: (path: string) => void;
};

class Breadcrumbs extends React.PureComponent<breadcrumbsProps> {
  constructor(props: breadcrumbsProps) {
    super(props);

    this.state = {
      list: props.path.split('/').filter((elem) => elem.length !== 0),
    };
  }

  linkClickHandler(path: string) {
    this.props.setPath(path);
  }

  render() {
    const list = this.props.currentPath
      .split('/')
      .filter((elem) => elem.length !== 0);

    return (
      <ul
        className={
          this.props.mod ? cn('Breadcrumbs')(this.props.mod) : 'Breadcrumbs'
        }
      >
        {list.map((elem, i) => (
          <BreadcrumbsItem
            onClick={() => {
              this.linkClickHandler(
                i === 0
                  ? '/'
                  : '/tree/' +
                      list.filter((link, j) => j > 0 && j <= i).join('/')
              );
            }}
            key={i}
            href={
              i === 0
                ? '/'
                : '/tree/' + list.filter((link, j) => j > 0 && j <= i).join('/')
            }
          >
            <span>{elem}</span>
          </BreadcrumbsItem>
        ))}
      </ul>
    );
  }
}

export default connect(
  (state: State) => ({
    repoName: state.repoName,
    currentPath: state.currentPath,
    fileType: state.fileType,
  }),
  actions
)(Breadcrumbs);
