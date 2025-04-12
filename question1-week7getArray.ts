/**
 * Returns the first element of an array.
 * If the array is empty, it returns undefined.
 * @param arr - An array of any type T.
 * @returns The first element of the array or undefined.
 */
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  // Example usage:
  const numbers = [10, 20, 30];
  const firstNumber = getFirst(numbers);
  console.log('First number:', firstNumber); // Output: 10
  
  const words = ["apple", "banana", "cherry"];
  const firstWord = getFirst(words);
  console.log('First word:', firstWord); // Output: apple
  
  const emptyArray: string[] = [];
  console.log('First of empty array:', getFirst(emptyArray)); // Output: undefined
  