export const generatePathname = (name: string, isUrl = true) => {
  const path = name.split(" ").join("-").toLocaleLowerCase();
  return isUrl ? encodeURI(path) : path;
};
