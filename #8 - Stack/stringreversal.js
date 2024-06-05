const str = "hi am sahal";

function reverse(s) {
  const splited = s.split(" ");
  let stack = [];

  for (let i of splited) {
    stack.push(i);
  }
  let finals = "";
  while (stack.length >= 1) {
    let current = stack.pop();
    if (current) finals += " " + current;
  }
  return finals;
}

console.log(reverse(str));
