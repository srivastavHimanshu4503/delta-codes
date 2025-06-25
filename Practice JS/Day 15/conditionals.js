let color = "red";
if (color === "red") {
    console.log("Stop! The color is red.")
} 
else if (color === "yellow") {
    console.log("Wait! The color is yellow.")
}
else if (color === "green") {
    console.log("Go! The color is green.")
}
else {
    console.log("Invalid color")
}

let size = "L";
if (size === "XL") {
    console.log("The price is 250");
}
else if (size === 'L') {
    console.log("The price is 200");
}
else if (size === 'M') {
    console.log("The price is 100");
}
else if (size === 'S') {
    console.log("The price is 50");
}
else {
    console.log("Invalid size")
}

let goodString = "abc";
// A good string is a string that starts with a letter 'a' and has length > 3.

if ((goodString.length > 3) && (goodString[0] == 'a')) {
    console.log("Given string is a Good String");
}
else {
    console.log("Given string is not a Good String");
}

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}