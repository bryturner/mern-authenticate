export const formatName = (name) => {
  const formattedName = name
    .trim()
    .toLowerCase()
    .slice(0, 1)
    .toUpperCase()
    .concat(name.slice(1, name.length));
  return formattedName;
};
