export const Types = {
  SET_FILE_NAME: "SET_FILE_NAME",
  SET_LOADER: "SET_LOADER",
  SET_REPO_LOADER: "SET_REPO_LOADER",
  SET_FILES: "SET_FILES",
  SET_REPOS: "SET_REPOS",
  SET_REPO_NAME: "SET_REPO_NAME",
  SET_FILE_TYPE: "SET_FILE_TYPE",
  SET_PATH: "SET_PATH",
};

export const setFileType = (fileType) => ({
  type: Types.SET_FILE_TYPE,
  fileType: fileType,
});

export const setFileName = (name) => ({
  type: Types.SET_FILE_NAME,
  fileName: name,
});

export const setLoader = (isLoader) => ({
  type: Types.SET_LOADER,
  isLoader,
});

export const setFiles = (files) => ({
  type: Types.SET_FILES,
  files,
});

export const setRepos = (repos) => ({
  type: Types.SET_REPOS,
  repos,
});

export const setRepoName = (repoName) => ({
  type: Types.SET_REPO_NAME,
  repoName,
});

export const setPath = (currentPath) => ({
  type: Types.SET_PATH,
  currentPath,
});
