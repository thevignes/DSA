

function uniw(arr) {
  let u = arr.flat();
  let arrr = [];
  for (let i = 0; i < u.length; i++) {
    if (u.indexOf(u[i]) === u.lastIndexOf(u[i])) {
      arrr.push(u[i]);
    }
  }
  return arrr;
}
let arr = [
  [1, 2, 4],
  [2, 1, 1],
  [4, 2, 7, 9],
];

// console.log(uniw(arr));



let newArr = [];
let row= 5;
let columns = 3;

for ( let i = 0; i< row ; i++ ){
     newArr[i] = [];
     for ( let j = 0; j< columns ; j++ ) {
        newArr[i][j] = j+1
     }
}

function * s () {
    
}
console.log(newArr)
