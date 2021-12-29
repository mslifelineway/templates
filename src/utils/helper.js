export const CommaStringToNumberArray = (comma = "") => {
  return comma.split(",").map((e) => parseInt(e, 10));
};
