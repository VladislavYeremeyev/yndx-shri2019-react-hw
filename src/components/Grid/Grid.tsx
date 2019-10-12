import React from 'react';
import { cn } from '@bem-react/classname';
import './Grid.css';
import './Header/Grid-Header.css';
import './Header/_border/Grid-Header_border_b.css';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import AuthorSpan from '../AuthorSpan/AuthorSpan';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import { getGitTreeContent } from '../../Store/requests';
import { pathToName } from '../../helper/helper';
import { Redirect } from 'react-router-dom';
import { State } from '../../Store/reducers/Reducer';
import { File } from '../../Store/reducers/Reducer';

type gridProps = {
  label: string;
  path: string;
  repoName: string;
  files: File[];
  setFiles: (files: string[]) => void;
  setLoader: (status: boolean) => void;
  setFileType: (type: string) => void;
  setPath: (type: string) => void;
};

type gridState = {
  activeTab: string;
  goToBlob: boolean;
};

class Grid extends React.PureComponent<gridProps, gridState> {
  constructor(props: gridProps) {
    super(props);

    this.state = {
      activeTab: 'files',
      goToBlob: false,
    };

    this.onChangeTab = this.onChangeTab.bind(this);
    this.getTree = this.getTree.bind(this);
  }

  onChangeTab(name: string) {
    this.setState({ activeTab: name });
  }

  getTree() {
    const { setFiles, setLoader, path, repoName } = this.props;
    getGitTreeContent(setFiles, setLoader, repoName, path);
  }

  linkClickHandler(type: string, path: string) {
    this.props.setFileType(type);
    this.props.setPath(path);
  }

  componentDidMount() {
    this.linkClickHandler('folder', `tree/${this.props.path}`);
    this.getTree();
  }

  componentDidUpdate(prevProps: gridProps) {
    const { path, files } = this.props;

    if (prevProps.path !== path) {
      const file = pathToName(path);
      const existFile = files.find((el) => el.name === file);

      if (!existFile) {
        this.getTree();
        return;
      }

      const isDir = existFile.isFolder;

      if (isDir) {
        this.getTree();
      } else {
        this.setState({ goToBlob: true });
      }
    }
  }

  render() {
    const pathname = window.location.pathname;
    const fileRoute =
      pathname[pathname.length - 1] === '/' ? pathname : pathname + '/';
    const { goToBlob } = this.state;
    const { path } = this.props;

    return goToBlob ? (
      <Redirect to={`/blob/${path}`} />
    ) : (
      <div className={`${cn('Grid')()} ${cn('Grid', 'Parent')()}`}>
        <div
          className={`${cn('Grid-Header')({ border: 'b' })} ${cn('Grid')({
            'm-columns': '12',
          })}`}
        >
          <div className={`${cn('Grid-Fraction')({ 'm-col': 2 })}`}>Name</div>
          <div className={`${cn('Grid-Fraction')({ 'm-col': 2 })}`}>
            Last commit
          </div>
          <div className={`${cn('Grid-Fraction')({ 'm-col': 4 })}`}>
            Commit message
          </div>
          <div className={`${cn('Grid-Fraction')({ 'm-col': 2 })}`}>
            Committer
          </div>
          <div
            className={`${cn('Grid-Fraction')({
              'm-col': 2,
              'text-align': 'right',
            })}`}
          >
            Updated
          </div>
        </div>
        {this.props.files.length ? (
          this.props.files.map((file, i) => (
            <div
              key={i}
              className={`${cn('Grid-Row')({
                border: i === this.props.files.length - 1 ? 'none' : 'b',
              })} ${cn('Grid')({
                'm-columns': '12',
              })}`}
            >
              <div
                className={`${cn('Grid-File')()} ${cn('Grid-Fraction')({
                  'm-col': 2,
                })}`}
              >
                <Icon
                  mod={{
                    'space-r': 'xs',
                    type: file.isFolder === true ? 'folder' : 'script',
                  }}
                />
                <NavLink
                  onClick={() =>
                    this.linkClickHandler(
                      file.isFolder === true ? 'folder' : 'script',
                      fileRoute + file.name
                    )
                  }
                  to={fileRoute + file.name}
                  className={`${cn('Grid-FileName')(
                    file.isFolder === true ? { text: 'bold' } : {}
                  )}`}
                >
                  {file.name}
                </NavLink>
              </div>
              <div
                className={`${cn('Grid-CommitHash')()} ${cn('Grid-Fraction')({
                  'm-col': 2,
                })}`}
              >
                <Link href="#" mod={{ color: 'blue' }}>
                  {file.commit}
                </Link>
                <div className={`${cn('Grid-CommitInfo')()}`}>
                  {file.commit_info}
                </div>
              </div>
              <div
                className={`${cn('Grid-CommitMessage')()} ${cn('Grid-Fraction')(
                  {
                    'm-col': 4,
                  }
                )}`}
              >
                {file.message}
              </div>
              <div
                className={`${cn('Grid-Committer')()} ${cn('Grid-Fraction')({
                  'm-col': 2,
                })}`}
              >
                <AuthorSpan>{file.committer}</AuthorSpan>
              </div>
              <div
                className={`${cn('Grid-UpdateDate')()} ${cn('Grid-Fraction')({
                  'm-col': 2,
                  'text-align': 'right',
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
  (state: State) => ({
    files: state.allFiles.filter((item) =>
      item.name.toUpperCase().includes(state.fileName.toUpperCase())
    ),
    repoName: state.repoName,
    fileType: state.fileType,
    currentPath: state.currentPath,
  }),
  actions
)(Grid);
