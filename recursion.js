export const recursiveFibonacci = (n) => {
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

// O(n) - Iterative
// O(2^n) - recursive


export const recursiveFactorial = (n) => {
    if(n < 2){
        return 1;
    }
    
    return n * recursiveFactorial(n-1);
}

//Big O =  O(n)