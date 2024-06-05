const arr = [1, 2, 3, 4, 5, 6];
//here used flag id i font use flag ( sorted ) best case and best case would be O(N^2) but help of this
// we can find sorted array then best complexity O(N) and wors is still O(N^2)
function bubblesort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let sorted = true;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return arr;
}

console.log(bubblesort(arr));
