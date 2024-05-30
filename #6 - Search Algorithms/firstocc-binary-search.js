

function firstOccBinary (arr, target) {
    let start = 0;
    let end = arr.length -1;
    let res = -1
    while ( start<= end ) {
        let middle = Math.floor((start+ end)/ 2);
        if (target === arr[middle]) {
            res = middle
            end = middle -1
        }
        else if ( arr[middle] > target ) {
           
            end = middle -1
        }
        else {
            start = middle +1
        }
    }
    return res
} 



console.log(firstOccBinary([1,1,1,1, 1, 2, 2, 3], 1))