/**
 * Converts a regular array of integers into a TypedArray (Uint8Array).
 * @param {number[]} arr - A regular array of integers.
 * @returns {Uint8Array} The converted TypedArray.
 */
function toTypedArray(arr) {
    return new Uint8Array(arr);
  }
  
  /**
   * Converts a TypedArray (Uint8Array) into a regular array.
   * @param {Uint8Array} typedArr - The TypedArray to convert.
   * @returns {number[]} A regular array of integers.
   */
  function toRegularArray(typedArr) {
    return Array.from(typedArr);
  }
  
  // Example usage:
  const regularArray = [5, 10, 15, 20, 25];
  const convertedTypedArray = toTypedArray(regularArray);
  console.log("Converted to TypedArray:", convertedTypedArray);
  
  const convertedBack = toRegularArray(convertedTypedArray);
  console.log("Converted back to Regular Array:", convertedBack);
  
  // Export functions (if using modules)
  export { toTypedArray, toRegularArray };
  