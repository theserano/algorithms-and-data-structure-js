export const primeNumber = (n) => {
    // prime numbers are greater than one, so check if the value if less than 2
    if(n < 2){
        return false;
    }
    // loop through the indexes to check which divides n without a remainder, if not exit the loop
    for(let i = 2; i < n; i++) {
        if(n%i === 0){
            return false
        }
    }
    // return true if loop returns null
    return true;
}

// Big O = O(n)