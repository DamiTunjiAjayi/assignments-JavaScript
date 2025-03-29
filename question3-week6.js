// Create a TypedArray (Uint8Array) with a length of 5
const typedArray = new Uint8Array(5);

// Populate the TypedArray with values (e.g., 10, 20, 30, 40, 50)
typedArray.set([10, 20, 30, 40, 50]);

// Print the original TypedArray to the console
console.log("TypedArray:", typedArray);

// Reverse the TypedArray.
// TypedArrays don't have a reverse() method, so convert to a regular array,
// reverse it, then convert back to a Uint8Array.
const reversedArray = new Uint8Array(Array.from(typedArray).reverse());
console.log("Reversed TypedArray:", reversedArray);

// Export variables (if using modules)
export { typedArray, reversedArray };
