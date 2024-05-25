

// we can see this two ways like O (1) (constant) and O(n) (linear) 

// function sum ( n ) {
//     let sum = 0;
//     for ( let i = 1 ; i <= n; i++ ) {
//        sum = sum + n;
//     }
//     return sum
// }

// function sum ( n ) {
//     let total = (n*(n+1)/2)
//     return total
// }

// const total = sum(3)
// console.log(total)

function fib (n) {
    const fib = [0]
    for (let  i =1 ; i < n; i++) {
        fib[i] = fib [i-1]  + fib [i-2] || 1 
    }
    return fib
}

const total = fib (7)

console.table(total)