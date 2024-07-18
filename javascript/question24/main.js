
let number1 = prompt("Enter the first number:");


let number2 = prompt("Enter the second number:");
number1 = parseFloat(number1);
number2 = parseFloat(number2);

if (number1 > 0 && number2 > 0) {

    let average = (number1 + number2) / 2;
    console.log(`The average of ${number1} and ${number2} is: ${average}`);
} else {

    console.log("Error: Both numbers must be positive.");
}
