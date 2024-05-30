function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return "not a palindrome";
    }
    start++;
    end--;
  }
  return "is a palindrome";
}

console.log(isPalindrome("mom"));
