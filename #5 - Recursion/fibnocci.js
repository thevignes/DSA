function fib (n, i= n) {
  if ( i < 2 ) {
    return [0,1];
  }
  const number = fib(n, i-1);
  number.push(number[i-1]+ number[i - 2])
  return number
}

console.log(fib(5))