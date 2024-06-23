
//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a,b){
    return a+b;
}
let result = calculateSum(3 , 5);
console.log(result);


//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(number){
    return number%2 === 0;
}
console.log(isEven(6));
console.log(isEven(7));


//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(numbers){
    if(numbers.length === 0){
        throw new Error("The array is empty");
    }
    let largest = numbers[0];
    for(let i=1; i <= numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return `The largest number is = ${largest}`;
}
let numOfArr = [3, 5, 7, 12, 8, -1];
console.log(findMax(numOfArr));


//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(string){
    return `The reverse of "${str}" is : ${string.split('').reverse().join('')}`;
}
let str = "niloydatta"
console.log(reverseString(str));


//5)Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log(filterOddNumbers(nums));


//6)Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(sum){
    return `The sum is = ${sum.reduce((prev,curr) => prev+curr)}`;
}
let elements = [1,2,3,4,5,6,7,8,9,10];
console.log(sumArray(elements));


//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
const num = [5, 2, 3, 9, 1, 5, 4, 2, 6];
console.log(sortArray(num));


//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized.
function capitalizeFirstLetter(modifyStr){
        return modifyStr.charAt(0).toUpperCase() + modifyStr.slice(1);
}
let string = "niloy";
console.log(capitalizeFirstLetter(string));


