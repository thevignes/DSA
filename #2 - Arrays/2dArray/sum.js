function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

// console.log(sum(arr));

/// with yield

function* yieldArr() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      yield arr[i][j];
    }
  }
}

const generator = yieldArr(arr);

let gen = generator.next();
let sumOf2d = 0;
while (!gen.done) {
  sumOf2d += gen.value;
  gen = generator.next();
}
console.log(sumOf2d);
