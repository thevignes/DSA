// range of numvers


function rangeOfnumbers (start, end) {
    if ( end < start ) {
        return []
    }
    else {
        const number = rangeOfnumbers(start, end-1);
        number.push(end);
        return number;
    }
}

console.log(rangeOfnumbers(1, 5))


