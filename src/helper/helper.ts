export const pathToName = (path: string) => {
  if (path) {
    let index = path.lastIndexOf("/"),
      fileName;

    if (index > -1) {
      fileName = path.substring(index + 1, path.length);
    }

    return fileName || path;
  } else {
		return path;
	}
};

export type mixType = [
  string,
  {
    [key: string]: string;
  }
];
