import { Types } from "../Actions";

export type State = {
	readonly fileName: string;
  readonly isLoader: boolean;
  readonly allFiles: File[];
  readonly repos: string[];
  readonly repoName: string;
  readonly fileType: string;
  readonly currentPath: string;
};

export type File = {
	isFolder: boolean;
	name: string;
	commit: string;
	commit_info: string;
	committer: string;
	message: string;
	updated: string;
};

let initialState: State = {
  fileName: "",
  isLoader: false,
  allFiles: [],
  repos: [],
  repoName: "",
  fileType: "",
  currentPath: "",
};

export const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Types.SET_FILE_NAME:
      let { fileName } = action;

      return {
        ...state,
        fileName: fileName,
      };
    case Types.SET_LOADER:
      return {
        ...state,
        isLoader: action.isLoader,
      };
    case Types.SET_FILES:
      return {
        ...state,
        allFiles: action.files,
      };
    case Types.SET_REPOS:
      return {
        ...state,
        repos: action.repos,
      };
    case Types.SET_REPO_NAME:
      return {
        ...state,
        repoName: action.repoName,
      };
    case Types.SET_FILE_TYPE:
      return {
        ...state,
        fileType: action.fileType,
      };
    case Types.SET_PATH:
      return {
        ...state,
        currentPath: action.currentPath,
      };
    default:
      return state;
  }
};
