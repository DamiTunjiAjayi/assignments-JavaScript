// Function to get the sum of two values
function addition(firstValue, secondValue) {
    return firstValue + secondValue
    }
    
    addition(11,34);
    console.log(addition(11,34));

//print 'Hello World'
console.log('Hello World');

//create variable to get currentDate and log the Date Time
const currentDate = new Date ();

console.log('The current Date and Time is: ',currentDate);

//print numbers from 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//Function to determine the largest number in an array

function getlargestNumber(array) {
    let largest = array[0] // this is to assume the first number in the array is the largest so as to compare with others in the array

    // iterate through the array to check which number is the largest
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
           largest = array[i]; // This will update to the current largest number
        }
    }
    return largest;
}

let numbers = [27, 34, 56, 73, 55, 110, 97];
console.log('The Largest number is: ', getlargestNumber(numbers));