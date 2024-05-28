function binaryRecursive(arr, target, right = 0, left = arr.length - 1) {
  if (right > left) {
    return -1;
  }
  let middleIndex = Math.floor((right + left) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (arr[middleIndex] > target) {
    return binaryRecursive(arr, target, right, (left = middleIndex - 1));
  } else {
    return binaryRecursive(arr, target, middleIndex + 1, left);
  }
}

console.log(binaryRecursive([1, 2, 3], 3));
