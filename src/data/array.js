const duplicateArray = [1, 2, 3, 1, 3, 4, 6, 6];

const usingFilter = (array = []) =>
  array.filter((item, index) => {
    return array.indexOf(item) === index;
  });

const removeDuplicatesFromArray = (array = [], method = "filter") => {
  console.log(array);
  switch (method) {
    case "filter":
      return usingFilter(array);

    case "reduce":
      return array.reduce((acc, item) => {
        if (!acc.includes(item)) acc.push(item);
        return acc;
      }, []);

    case "set":
      return new Set(array);
    default:
      return [];
  }
};

export const ArrayData = {
  duplicateArray,
  removeDuplicatesFromArray,
  usingFilter,
};
