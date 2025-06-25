// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.
let arr = [2, 3, 4, 5, 3, 4, 7, 1, 8, 2, 6];

// let sqSum = arr.map(el => el*el).reduce((res, el) => (res + el));
// let sqSum = arr.reduce((res, el) => res + el*el, 0); // Initialize res with 0
// let avg = sqSum/arr.length;

let avg = arr.reduce((res, el) => (res + el*el), 0)/arr.length;

console.log(avg);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
console.log(arr, arr.map(el => el+5));

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let words = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(words, words.map(el => el.toUpperCase()))

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map(el => el*2)
];

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}