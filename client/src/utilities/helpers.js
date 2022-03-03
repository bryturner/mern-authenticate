export const firstLetterToUpperCase = (word) => {
  const allLowerCaseWord = word.toLowerCase();
  const firstLetterUpperCase = allLowerCaseWord.slice(0, 1).toUpperCase();
  return firstLetterUpperCase.concat(
    allLowerCaseWord.slice(1, allLowerCaseWord.length)
  );
};
