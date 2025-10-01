let age = prompt("Enter your age:");

switch (true) {
    case (age >= 18):
        console.log("You can vote.");
        break;
    default:
        console.log("You can't vote.");
    }