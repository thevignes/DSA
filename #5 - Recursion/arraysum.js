function arraySum(arr, index = arr.length - 1) {
  if (index < 1) {
    return arr[index];
  }
  return arr[index] + arraySum(arr, index - 1);
}

console.log(arraySum([5, 2, 3]));
