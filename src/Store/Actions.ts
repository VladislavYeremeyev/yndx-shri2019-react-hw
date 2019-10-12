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

export const setFileType = (fileType: string) => ({
  type: Types.SET_FILE_TYPE,
  fileType: fileType,
});

export const setFileName = (name: string) => ({
  type: Types.SET_FILE_NAME,
  fileName: name,
});

export const setLoader = (isLoader: boolean) => ({
  type: Types.SET_LOADER,
  isLoader,
});

export const setFiles = (files: string[]) => ({
  type: Types.SET_FILES,
  files,
});

export const setRepos = (repos: string[]) => ({
  type: Types.SET_REPOS,
  repos,
});

export const setRepoName = (repoName: string) => ({
  type: Types.SET_REPO_NAME,
  repoName,
});

export const setPath = (currentPath: string) => ({
  type: Types.SET_PATH,
  currentPath,
});
