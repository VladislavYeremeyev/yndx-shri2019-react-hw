export const pathToName = (path) => {
  if (path) {
    let index = path.lastIndexOf("/"),
      fileName;

    if (index > -1) {
      fileName = path.substring(index + 1, path.length);
    }

    return fileName || path;
  }
};
