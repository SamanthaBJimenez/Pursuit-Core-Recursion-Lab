//Problem 1

// - ### Sum of all from 1 to n

// Write a function that takes in a number as input and recursively finds the sum of all numbers up to and including that number.

// ```js
// input: 6
// output: 21

// //21 = 6 + 5 + 4 + 3 + 2 + 1
// ```

const sumOfNum = (num,sum = 0) => {
    if(num === 0) return sum;
    sum += num
    num--
    return sumOfNum(num,sum)
}
console.log(sumOfNum(6))