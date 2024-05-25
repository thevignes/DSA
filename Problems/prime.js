

function prime ( n ) {
    if (  n < 2 ) {
        return false
    }
    for ( let i = 2; i < n ; i++ ) {
        if ( n%i === 0 ) {
            return false
        }
    }
    return "its a prime number";
}

const result = prime(5);
console.log(result)