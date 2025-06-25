let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));
console.log(arr.slice(arr.length-n));

let str = "a";
if (str) {
    console.log("String is not blank");
} else {
    console.log("String is blank!");
}

let testStr = "  absAshisS ";
let i = 4;

if (testStr[i] === testStr[i].toLowerCase()) {
    console.log("At the given index the character is lowercase.");
} else {
    console.log("At the given index the character is not lowercase.");
}

console.log(testStr.trim());

console.log(arr.includes(7));