function factorial(n) {
  let f = 1;
  for (let i = n; i > 0; i--) {
    f *= i;
  }
  return f;
}

console.log(factorial(4));
