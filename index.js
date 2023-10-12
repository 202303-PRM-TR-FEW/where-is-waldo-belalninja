const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"],
];

const whereIsWaldo = (matrix) => {
  for (const [index, element] of matrix.entries()) {
    debugger;
    for (const [i, v] of element.entries()) {
      debugger;
      if (element[i + 1] == undefined || element[i - 1] == undefined) {
        if (
          element[i] !== element[i + 1] &&
          element[i] !== element[i + 2] &&
          element[i - 1] == undefined
        ) {
          return [index + 1, i + 1];
        } else if (
          element[i] !== element[i - 1] &&
          element[i] !== element[i - 2] &&
          element[i + 1] == undefined
        ) {
          return [index + 1, i + 1];
        }
      } else if (
        element[i] !== element[i - 1] &&
        element[i + 1] !== element[i]
      ) {
        return [index + 1, i + 1];
      }
    }
  }
};
console.log(whereIsWaldo(example));
