const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"],
];

const whereIsWaldo = (matrix) => {
  for (const [row, element] of matrix.entries()) {
    // debugger;
    for (const [column, v] of element.entries()) {
      // debugger;
      if (
        element[column + 1] == undefined ||
        element[column - 1] == undefined
      ) {
        if (
          element[column] !== element[column + 1] &&
          element[column] !== element[column + 2] &&
          element[column - 1] == undefined
        ) {
          return [row + 1, column + 1];
        } else if (
          element[column] !== element[column - 1] &&
          element[column] !== element[column - 2] &&
          element[column + 1] == undefined
        ) {
          return [row + 1, column + 1];
        }
      } else if (
        element[column] !== element[column - 1] &&
        element[column + 1] !== element[column]
      ) {
        return [row + 1, column + 1];
      }
    }
  }
};
console.log(whereIsWaldo(example));
