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
// console.log(sumOfNum(6))

//Problem 2

// - ### Multiply array

// Write a function called `multArr` that takes in an array of numbers as an argument and recursively multiplies together all of the values in the array.

// ```js
// multArr([2, 3, 5]); // returns 30
// multArr([5, 5, 1, 2]); //returns 50
// ```

const multArr = (arr, product = 1) => {
    if(arr.length === 0) return product;
    let el = arr.pop();
    return multArr(arr) * el;
}

// console.log(multArr([2, 3, 5]));
// console.log(multArr([0]));

//Problem 3

// - ### Concatenate array

// Write a function called `concatArr` that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.

// ```js
// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'
// ```

const concatArr = (arr, concat = "") => {
    if(arr.length === 0) return concat
    concat = arr.pop();
    return concatArr(arr) + concat + " "
}
// console.log(concatArr(['is', 'it', 'tomorrow']))

//Problem 4

// - ### Sum evens

// Write a function called `sumEvens` that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.

// ```js
// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24
// ```

const sumEvens = (arr, i = 0, sum = 0) => {
    if(i >= arr.length) return sum;
    if(arr[i] % 2 === 0) {
        sum += arr[i];
    }
    i++;
    return sumEvens(arr, i, sum);
}
// console.log(sumEvens([2, 3, 5, 6]));
// console.log(sumEvens([10, 5, 1, 2, 12]));