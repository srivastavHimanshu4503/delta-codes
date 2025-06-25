// Qs1. Write an arrow function named arrayAverage that accepts an array of number and returns the average of those numbers.
const arrayAverage = (arr) => {
    let sum = 0;
    for(let num of arr) sum += num;
    return (sum/arr.length);
}

// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or odd.
const isEven = n => !(n%2);

// Qs3. What is the output of the following code:
const object = {
    message : "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

// Ans: undefined logged to the console window after one second as in the setTimeout object method is passed as callback function and for that this refers to global object i.e, window and window.message is undefined.


// Qs4. What is the output of the following code:
let length = 4;
function callback() {
    console.log(this.length);
}
const obj = {
    length: 5,
    method(callback) {
        callback();
    }
}
obj.method(callback);

// Ans: undefined is logged as callback acts as a regular function and its parent object becomes window and there is no parameter length in window object result in undefined.
