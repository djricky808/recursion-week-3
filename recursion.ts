// 1. Factorial of a Number
// Write a recursive function to compute the factorial of a given number n.
// Factorial of n (denoted as n!) is defined as: n! = n * (n-1) * (n-2) * ... * 1
// Base case: 0! = 1
//
// Example Test Cases:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

function factorial(n: number): number {
  // Your code here
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(7));

// 2. Sum of an Array
// Write a recursive function to calculate the sum of all numbers in an array.
//
// Example Test Cases:
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5

function sumArray(arr: number[]): number {
  // Your code here
  if (arr.length <= 0) {
    //Once there are no numbers left in the array.
    return 0;
  }
  return arr[arr.length - 1] + sumArray(arr.slice(0, arr.length - 1));
  //Takes the last number in the array and will call sumArray for the next to last item and so on.
  //The next sumArray will cut the last item in the array using slice()
}

// 3. Reverse a String
// Write a recursive function that reverses a given string.
//
// Example Test Cases:
console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

function reverseString(str: string): string {
  // Your code here
  if (str.length <= 0) {
    return "";
  }
  return (str.split("")[str.length - 1] += reverseString(
    str.slice(0, str.length - 1)
  ));
}

// 4. Check if a String is a Palindrome
// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).
//
// Example Test Cases:
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("a")); // Output: true
// console.log(isPalindrome("peep")); // true
// console.log(isPalindrome("peephole")); //false

function isPalindrome(str: string): boolean {
  // Your code here
  if (str.length <= 1) {
    return true; //basecase when string has only 0-1 letters left
  }
  let middle = Math.floor(str.length / 2);
  //find the middle of the string
  const findPalindrome = (left: number, right: number, string: string) => {
    return string[left] === string[right];
  };
  if (str.length % 2 === 0) {
    //when the palindrome is even
    return findPalindrome(middle - 1, middle, str)
      ? isPalindrome(
          str.slice(0, middle - 1) + str.slice(middle + 1, str.length)
        )
      : false;
  } else {
    return findPalindrome(middle - 1, middle + 1, str)
      ? isPalindrome(str.slice(0, middle) + str.slice(middle + 1, str.length))
      : false;
  }
}

// 5. Compute the N-th Fibonacci Number
// Write a recursive function to compute the nth Fibonacci number.
// The Fibonacci sequence is defined as:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
//
// Example Test Cases:

// let fibonacciMemo = {};

// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1

function fibonacci(
  n: number,
  fibonacciMemo: { [n: string]: number } = {}
): number {
  // Your code here
  console.log(fibonacciMemo);
  if (fibonacciMemo[n]) {
    return fibonacciMemo[n];
  }
  if (n <= 1) {
    return (fibonacciMemo[n] = n);
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 6. Flatten a Nested Array
// Write a recursive function to flatten an array that contains nested arrays into a single-level array.
//
// Example Test Cases:
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([])); // Output: []
console.log(
  flattenArray([
    [1, 2],
    [3, 4, [5, 6]],
  ])
);

function flattenArray(arr: any[], flattened: any[] = []): any[] {
  // Your code here
  if (arr.length === 0) {
    return flattened.reverse();
  }
  if (Array.isArray(arr[arr.length - 1])) {
    return flattenArray(
      arr.slice(0, arr.length - 1).concat(arr[arr.length - 1].flat()),
      flattened
    );
  }
  flattened.push(arr[arr.length - 1]);
  return flattenArray(arr.slice(0, arr.length - 1), flattened);
}

// 7. Count the Number of Occurrences of a Value in an Array
// Write a recursive function that counts how many times a given value appears in an array.
//
// Example Test Cases:
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

function countOccurrences(
  arr: number[],
  value: number,
  count: number = 0
): number {
  // Your code here
  if (arr.length === 0) {
    return count;
  }
  if (arr[arr.length - 1] === value) {
    count += 1;
  }
  return countOccurrences(arr.slice(0, arr.length - 1), value, count);
}

// 8. Find the Maximum Number in an Array
// Write a recursive function that finds and returns the maximum value in an array.
//
// Example Test Cases:
// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// console.log(findMax([7, 7, 7, 7])); // Output: 7
// console.log(findMax([-1, -2, -3, -4])); // Output: -1
// console.log(findMax([])); // -Infinity

function findMax(
  arr: number[],
  max: number = Number.NEGATIVE_INFINITY
): number {
  // Your code here
  if (arr.length === 0) {
    return max;
  }
  if (arr[arr.length - 1] > max) {
    max = arr[arr.length - 1];
  }
  return findMax(arr.slice(0, arr.length - 1), max);
}
