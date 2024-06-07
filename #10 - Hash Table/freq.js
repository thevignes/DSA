function freq(str) {
  let obj = {};
  let maxcount = 0;
  let maxLet = '';
  for (let i of str) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
    if (obj[i] > maxcount) {
      maxcount = obj[i];
      maxLet = i
    }
  }
  return {maxLet, maxcount};
}


console.log(freq("sahalll"));
