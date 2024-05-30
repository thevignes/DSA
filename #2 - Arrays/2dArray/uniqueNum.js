function uniqueNumber(arr) {
  let arrDup = arr.flat();
  let size = arrDup.length;
  let unique = [];
  for (let i = 0; i < size - 1; i++) {
    if (arrDup.indexOf(arrDup[i]) === arrDup.lastIndexOf(arrDup[i])) {
      unique.push(arrDup[i]);
    }
  }
  return unique;
}

let arr = [
  [1, 2, 3],
  [1, 2, 2],
  [4, 1, 2],
];

console.log(uniqueNumber(arr));
