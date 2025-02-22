// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

/* Strategy:
[1,2,3,4,5]
In a set of 5 elements, the possible solutions are
1,2,3 / 1,2,4 / 1,2,5 / 1,3,4/ 1,3,5/ 1,4,5
2,3,4/ 2,3,5 / 2,4,5
3,4,5/
if we were to write this using for loops...
loop through the third number in the trio for any possibilities
Then repeat while iterating through the second number in the trio
In move the i index up 1.
*/

function loopThreeSum(arr: number[]): number[][] | null[] {
  let tripletSumToZero: number[][] = [];
  for (let i = 0; i < arr.length - 2; i++) {
    //omit the last two elements in the array since i would never be the 2nd or 3rd number in the triplet
    for (let j = i + 1; j < arr.length - 1; j++) {
      //j cannot be the last number
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          tripletSumToZero.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return tripletSumToZero;
}

console.log(loopThreeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]

function threeSum(arr) {
  // Your code here
}

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:
// console.log(rockPaperScissors(2));
// Expected Output: [
//   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
//   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
//   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
// ]
// console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

function rockPaperScissors(n) {
  // Your code here
}
