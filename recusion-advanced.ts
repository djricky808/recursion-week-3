// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// // Expected Output: [[-1, -1, 2], [-1, 0, 1]]
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
!Extra trio found in test sample, because the same 3 numbers are in a different combination. 
*/

function loopThreeSum(arr: number[]): number[][] | number[] {
  let tripletSumToZero: number[][] = [];
  for (let i = 0; i < arr.length - 2; i++) {
    //omit the last two elements in the array since i would never be the 2nd or 3rd number in the triplet
    for (let j = i + 1; j < arr.length - 1; j++) {
      //j cannot be the last number
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let doesTrioExistInTripletToZero = false;
          //checks to see if the trio exists in a different variation.
          tripletSumToZero.forEach((trio) => {
            if (
              trio.every((number) => [arr[i], arr[j], arr[k]].includes(number))
            ) {
              doesTrioExistInTripletToZero = true;
            } else {
              console.log(
                `Trio ${[arr[i], arr[j], arr[k]]} and ${trio} are a mismatch!`
              );
            }
          });
          !doesTrioExistInTripletToZero &&
            tripletSumToZero.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return tripletSumToZero;
}

// console.log(loopThreeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]

//How to convert to recursive function:
// Start from the end instead of the beginnng,
// Nest 3 recursive functions with i, j, and k.
// Move k and j until the whole array is passed, then slice i.
// If the 3 numbers add to zero check if the triplet already exists in the array.

function threeSum(
  arr: number[],
  i: number = arr.length - 1,
  j: number = arr.length - 2,
  k: number = arr.length - 3,
  tripletSumToZero: number[][] = []
): number[][] | number[] {
  // Your code here
  if (arr.length < 3) {
    return tripletSumToZero;
  }
  if (arr[i] + arr[j] + arr[k] === 0) {
    let doesTrioExistInTripletToZero = false;
    tripletSumToZero.forEach((trio: number[]) => {
      if (trio.every((number) => [arr[i], arr[j], arr[k]].includes(number))) {
        doesTrioExistInTripletToZero = true;
      }
    });
    !doesTrioExistInTripletToZero &&
      tripletSumToZero.push([arr[i], arr[j], arr[k]]);
  }
  if (j <= 1) {
    return threeSum(
      arr.slice(0, arr.length - 1),
      arr.length - 2,
      arr.length - 3,
      arr.length - 4,
      tripletSumToZero
    );
  } else if (k <= 0) {
    return threeSum(arr, i, j - 1, j - 2, tripletSumToZero);
  } else {
    return threeSum(arr, i, j, k - 1, tripletSumToZero);
  }
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

function rockPaperScissors(n: number): string[][] {
  // Your code here
  const possibilities = [];
  const options = ["rock", "paper", "scissors"];

  function createOutcome(currentRound: number, outcome: string[]): void {
    if (currentRound === 0) {
      console.log("Pushing outcome");
      console.log(outcome);
      possibilities.push(outcome);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      console.log("current round", currentRound);
      console.log(i, options[i]);
      console.log(outcome);
      createOutcome(currentRound - 1, [...outcome, options[i]]);
    }
  }
  createOutcome(n, []);
  return possibilities;
}

console.log(rockPaperScissors(3));
