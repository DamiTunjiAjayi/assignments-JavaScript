/**
 * Flattens a nested array (e.g., [[1,2], [3,4], [5]] => [1,2,3,4,5])
 * using ES6 array methods.
 * @param {Array} nestedArray - The nested array to flatten.
 * @returns {Array} The flattened array.
 */
function flattenArray(nestedArray) {
    return nestedArray.reduce((acc, curr) => acc.concat(curr), []);
  }
  
  // Example usage:
  const nested = [[1, 2], [3, 4], [5]];
  console.log("Flattened array:", flattenArray(nested)); // [1, 2, 3, 4, 5]
  
  // Export function (if using modules)
  export { flattenArray };
  