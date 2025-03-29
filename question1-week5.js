/**
 * Returns a new array with only the even numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number[]} An array containing only even numbers.
 */
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  /**
   * Returns the sum of all numbers in the array using .reduce().
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} The sum of the numbers.
   */
  function sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Example usage:
  const sampleNumbers = [1, 2, 3, 4, 5, 6];
  console.log("Even numbers:", getEvenNumbers(sampleNumbers)); // [2, 4, 6]
  console.log("Sum of numbers:", sumNumbers(sampleNumbers));    // 21
  
  // Export functions (if using modules)
  export { getEvenNumbers, sumNumbers };
  