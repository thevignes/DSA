// how create 2d array
let mainArr = [];
let column = 3;
let row = 4;

for (let i = 0; i < row; i++) {
  mainArr[i] = [];
  for (let j = 0; j < column; j++) {
    mainArr[i][j] = j + 1;
  }
}

console.log(mainArr);
