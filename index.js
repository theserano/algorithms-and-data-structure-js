import { factorial } from "./factorial.js";
import { fibonacci } from "./fibonacci.js";
import { isPowerOfTwo } from "./powerOfTwo.js";
import { primeNumber } from "./prime_numbers.js";
import { recursiveFactorial, recursiveFibonacci } from "./recursion.js";
import { LinearSearch } from "./linear_search.js";
import { BinarySearch, RecursiveBinarySearch } from "./binary_search.js";
import { InsertionSort, MergeSort, QuickSort } from "./sorting.js";


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
// console.log(recursiveFactorial(0)); // 1
// console.log(recursiveFactorial(1)); // 1
// console.log(recursiveFactorial(5)); // 120

// linear search algorithm
// console.log(LinearSearch([-5, 2, 10, 4, 6], 10)); // 2
// console.log(LinearSearch([-5, 2, 10, 4, 6], 6)); // 4
// console.log(LinearSearch([-5, 2, 10, 4, 6], 20)); // -1

// Binary search algorithm
// console.log(BinarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(BinarySearch([-5, 2, 4, 6, 10], 6)); // 3
// console.log(BinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Recursive Binary search algorithm
// console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
// console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// insertion sort algorithm
const array = [8, 20, -2, 4, -6];
// console.log(InsertionSort(array)); //[-6, -2, 4, 8, 20]
// console.log(QuickSort(array));  //[-6, -2, 4, 8, 20]
console.log(MergeSort(array));  //[-6, -2, 4, 8, 20]
