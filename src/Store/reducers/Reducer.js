import { Types } from '../Actions.js';

let initialState = {
    fileName: '',
    isLoader: false,
    allFiles: [],
    repos: [],
    repoName: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_FILE_NAME:
            let { fileName } = action;

            return {
                ...state,
                fileName: fileName
            };
        case Types.SET_LOADER:
            return {
                ...state,
                isLoader: action.isLoader
            };
        case Types.SET_FILES:
            return {
                ...state,
                allFiles: action.files
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
        default:
            return state;
    }
};
