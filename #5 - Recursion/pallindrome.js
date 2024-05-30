function isPalindrome(str) {
  function reverseString(s) {
    if (s === "") {
      return "";
    }
    return reverseString(s.substr(1)) + s.charAt(0);
  }
  let reversed = reverseString(str);
  if (reversed === str) {
    return "it is a pallindrome ";
  } else {
    return "its not a pallinderome";
  }
}

console.log(isPalindrome("mom"));
