const arr = [7, 4, 1, 3, 9, 5, 6, 8];

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, middle));
  console.log(`${left}
  ----------
  `)
  let right = mergesort(arr.slice(middle));
  console.log(`${right}
  ***********
  `)
  return merge(left, right);
}

function merge(left, right) {
  let sortedarr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedarr.push(left.shift());
    } else sortedarr.push(right.shift());
  }
  return [...sortedarr, ...left, ...right];
}

console.log(mergesort(arr));

