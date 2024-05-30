function reverse (str) {
    let s ="";
    let len = str.length
    for ( let i = len-1 ; i >= 0; i--  ) {
        s+= str[i]
    }
    return s
}


console.log(reverse("sahal"))