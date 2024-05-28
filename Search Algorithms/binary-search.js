function binarySearch (arr, target, leftIndex = 0, rightIndex= arr.length - 1) {
  while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex+rightIndex) / 2);
      if ( arr[middleIndex] === target) {
        return middleIndex
      }
      if ( arr[middleIndex] > target ) {
        rightIndex = middleIndex -1
      }
      else {
        leftIndex = middleIndex + 1
      }
  }
  return -1;
}



console.log(binarySearch([1 , 2, 3],12))