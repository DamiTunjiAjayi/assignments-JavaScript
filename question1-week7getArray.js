/**
 * Returns the first element of an array.
 * If the array is empty, it returns undefined.
 * @param arr - An array of any type T.
 * @returns The first element of the array or undefined.
 */
function getFirst(arr) {
    return arr[0];
}
// Example usage:
var numbers = [10, 20, 30];
var firstNumber = getFirst(numbers);
console.log('First number:', firstNumber); // Output: 10
var words = ["apple", "banana", "cherry"];
var firstWord = getFirst(words);
console.log('First word:', firstWord); // Output: apple
var emptyArray = [];
console.log('First of empty array:', getFirst(emptyArray)); // Output: undefined
