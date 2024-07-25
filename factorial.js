export const factorial = (n) => {
    // initialize a variable to 1 because 0! = 1 and 1! = 1 factorial is with a non-negative number
    let factorial = 1;
    // perform a for loop and initialize i = 2 because that is the next index
    for(let i = 2; i <= n; i++){
        // update the value of factorial to be the multiplication of the factorial and the index
        factorial = factorial * i
    }
    return factorial;
}

// Big O = O(n)