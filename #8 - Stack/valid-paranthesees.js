const validparntehesees = (
  parnathesees,
  obj = { "{": "}", "[": "]", "(": ")" }
) => {
  let stack = [];
  for (let parn of parnathesees) {
    if (Object.keys(obj).includes(parn)) {
      stack.push(parn);
    } else {
      let top = stack.pop();

      if (obj[top] !== parn) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(validparntehesees("[]"));
