export const isPowerOfTwo = (n) => {
    // check if it is a positive integer
    if(n < 1) {
        return false;
    }
    // the condition runs if n is still greater than 1 meaning it is still divisible by 2
    while (n > 1) {
        // if the modulus returns a remainder that is not 0 then it is not a power of two
        if (n%2 != 0) {
            return false;
        }
        // keep dividing the number by two
        n = n/2
    }
    // after the while statement has been executed, then it returns true.
    return true;
}

export const isPowerOfTwoBitwise = (n) => {
    // check if it is a positive integer
    if(n < 1) {
        return false;
    }
    // check if n is a power of 2
    return (n & (n-1)) === 0
}