// reverse Array

function arrayRev(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  arrayRev(arr, start + 1, end - 1);
}

const array = [1, 2, 3];

// reverse array to new array

function reverse(arr, i = arr.length - 1) {
  if (i < 0) {
    return [];
  }
  const number = reverse(arr, i - 1);
  number.unshift(arr[i]);
  return number;
}

// console.log(reverse(array));

// reverse string

function reverseString(str) {
    if ( str === "" ) {
        return ""
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString("sahal"));
