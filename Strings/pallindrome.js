function isPalindrome(str) {
    let size = str.length;
    for (let i = 0; i < size / 2; i++) {
      if (str[i] !== str[size - 1 - i]) {
        return "not a palindrome";
      }
    }
    return "is a palindrome";
  }
  
  console.log(isPalindrome("mom"));  

