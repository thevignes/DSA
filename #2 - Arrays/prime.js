

function primeNumebr ( num ) {
    for ( let i = 2 ; i<= num/2 ; i++  ) {
       if ( num%i === 0 ) {
        return "its not a prime number"
       }
    }
    return "its a prime number"
}


console.log(primeNumebr(4))