export const fibonacci = (n) => {
    // initialize an array that has the first two numbers of a fibonacci series
    const fib = [0, 1];
    // create a loop with a starting index 2 and increment until n
    for(let i = 2; i < n; i++) {
        // add the preceding two values together to get the next index
        fib[i] = fib[i - 1] + fib[i - 2] 
    }
    return fib;
}

// Big 0 = O(n) Linear time complexity