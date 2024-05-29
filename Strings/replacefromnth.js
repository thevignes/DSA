
// Replace alphabets with nth forward alphabet in JavaScript 
const str = "abcde";
const n = 4;
const replaceNth = (str, n) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let  pos,res = "";
  for (let i = 0; i < str.length; i++) {
    pos = alphabet.indexOf(str[i]);
    console.log((pos + n) % alphabet.length)
    res += alphabet[(pos + n) % alphabet.length];
  }
  return res;
};
console.log(replaceNth(str, n));
