// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Example usage
const result = addNumbers(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

// You can also export this function if you want to use it in other files
module.exports = addNumbers;