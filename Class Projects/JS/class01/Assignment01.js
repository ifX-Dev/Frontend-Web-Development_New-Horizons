// Even or Odd Number Checker

// let promptValue = prompt("Enter a number:");

// if (promptValue % 2 == 0) {
//     alert("Your number is even number");
// } else if (promptValue % 2 == 1) {
//     alert("Your number is odd number");
// } else {
//     alert("Your input is not a whole number");
// };

// Positive, Negative or Zero Number Checker

// let promptValue = prompt("Enter a number:");

// if (promptValue > 0) {
//     alert("Your number is positive number");
// } else if (promptValue < 0) {
//     alert("Your number is negative number");
// } else {
//     alert("Your number is zero");
// }

// Grade Checker

// let promptValue = prompt("Enter your score (0-100):");

// if (promptValue >= 90 && promptValue <= 100) {
//     alert("Your grade is A");
// } else if (promptValue >= 80 && promptValue <= 89) {
//     alert("Your grade is B");
// } else if (promptValue >= 70 && promptValue <= 79) {
//     alert("Your grade is C");
// } else if (promptValue >= 60 && promptValue <= 69) {
//     alert("Your grade is D");
// } else if (promptValue >= 0 && promptValue <= 59) {
//     alert("Your grade is F");
// } else {
//     alert("Invalid score. Please enter a score between 0 and 100.");
// }

// Voting Eligibility Checker

// let promptValue = prompt("Enter your age:");

// if (promptValue >= 18) {
//     alert("You can vote.");
// } else {
//     alert("You are too young to vote.");
// }

// Number Comparison

// let firstPromptValue = prompt("Enter the first number:");
// let secondPromptValue = prompt("Enter the second number:");

// let firstNumber = Number(firstPromptValue);
// let secondNumber = Number(secondPromptValue);

// if (firstNumber > secondNumber) {
//     alert("The first number is greater than the second number.");
// }  else if (firstNumber < secondNumber) {
//     alert("The second number is greater than the first number.");
// } else {
//     alert("Both numbers are equal.");
// }

// Leap Year Checker

// let promptValue = prompt("Enter a year:");

// if (promptValue % 4 == 0) {
//     alert("The year is a leap year.");
// } else {
//     alert("The year is not a leap year.");
// }

// Temperature Checker

// let promptValue = prompt("Enter the temperature in Celsius:");

// if (promptValue > 30) {
//     alert("Hot");
// } else if (promptValue >= 20 && promptValue <= 30) {
//     alert("Warm");
// } else if (promptValue >= 0 && promptValue <= 20) {
//     alert("Cold");
// } else {
//     alert("Freezing");
// };

// Password Match 

// let promptValue = prompt("Enter your password:");

// if (promptValue === "hello123") {
//     alert("Access granted.");
// } else {
//     alert("Access denied.");
// };

// Day of the Week Checker

// let promptValue = prompt("Enter number of the day from 1 - 7");

// switch (Number(promptValue)) {
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid input. Please enter a number between 1 and 7.");
// };

// Smallest of Three Numbers

let firstPromptValue = Number(prompt("Enter the first number:"));
let secondPromptValue = Number(prompt("Enter the second number:"));
let thirdPromptValue = Number(prompt("Enter the third number:"));

if (firstPromptValue <= secondPromptValue && firstPromptValue <= thirdPromptValue) {
    alert("The smallest number is: " + firstPromptValue);
} else if (secondPromptValue <= firstPromptValue && secondPromptValue <= thirdPromptValue) {
    alert("The smallest number is: " + secondPromptValue);
} else {
    alert("The smallest number is: " + thirdPromptValue);
};

