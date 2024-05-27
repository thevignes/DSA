function  facotrial (n) {
    if ( n === 0 ) {
        return 1
    } 
    return n * facotrial(n -1)
};

console.log(facotrial(4))