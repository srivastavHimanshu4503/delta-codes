let num = 10;
if (!(num%10)) {
    console.log("Good");
} else {
    console.log("Bad");
}

let userName = prompt("Enter user name:");
let age = prompt("Enter your age: ")
alert(`${userName} is ${age} years old.`);

let quarter = 2;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;

    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;

    case 4:
        console.log("October, November, Devember");
        break;

    default:
        console.log("Invalid quarter")
        break;
}

let goldenString = "golden";
// A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
if (goldenString.length > 5 && (goldenString[0] === 'A' || goldenString[0] === 'a')) {
    console.log("Golden");
} else {
    console.log("Not Golden");
}

let a = 5, b = 8, c = 9;
if ((a >= b) && (a >= c)) {
    console.log(a + " is the largest among all.");
}
else if (b >= c) {
    console.log(b + " is the largest among all.");
}
else {
    console.log(c + " is the largest among all.");
}

let num1 = 32;
let num2 = 47852;

if (num1%10 === num2%10) {
    console.log("Both numbers have same last digit.");
}
else {
    console.log("Both numbers do not have same last digit.");
}