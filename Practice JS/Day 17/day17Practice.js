let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

let number = 287152, count = 0;
let sum = 0;

while (number > 0) {
    console.log(number, number%10);
    sum += parseInt(number%10);
    count++;
    number = parseInt(number/10);
}
console.log(count, sum);

let n= 5;
let fact = 1;
for(let i=1; i<=n; i++) {
    fact *= i;
}
console.log("The factorial of the number " + n + " is " + fact);

let max = arr[0];
for(let i=1; i<arr.length; i++) {
    if (max < arr[i])
        max = arr[i];
}
console.log("The maximum number is " + max);
