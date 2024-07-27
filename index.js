import { factorial } from "./factorial.js";
import { fibonacci } from "./fibonacci.js";
import { isPowerOfTwo } from "./powerOfTwo.js";
import { primeNumber } from "./prime_numbers.js";
import { recursiveFactorial, recursiveFibonacci } from "./recursion.js";


// fibonacci algorithm
// console.log('Fibonacci algorithm');
// console.log(fibonacci(2)) //[0, 1]
// console.log(fibonacci(3)) //[0, 1, 1]
// console.log(fibonacci(7)) //[0, 1, 1, 2, 3, 5, 8]

// factorial algorithm
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(5)); // 120

// prime number algorithm
// console.log(primeNumber(1)); //false
// console.log(primeNumber(5)); //true
// console.log(primeNumber(4)); //false

// power of two algorithm
// console.log(isPowerOfTwo(1)); //true
// console.log(isPowerOfTwo(2)); //true
// console.log(isPowerOfTwo(5)); //false

//recursive fibonacci 
// console.log(recursiveFibonacci(0)); //0
// console.log(recursiveFibonacci(1)); //1
// console.log(recursiveFibonacci(6)); //8

// recursive factorial
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120