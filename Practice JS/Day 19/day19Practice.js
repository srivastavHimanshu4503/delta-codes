// Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [2, 3, 4, 6, 5, 7, 4, 8, 2, 9, 12, 5];
let num = 5;

function elemGtNum(arr, target) {
    let newarr = [];
    for (num of arr) {
        if (num > target) {
            newarr.push(num);
        }
    }
    return newarr
}

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh" ans = "abcdefgh"
let str = "abcdabcdefgggh";
const getUnique = function(str) {
    let ans = "";
    for(char of str) {
        if (ans.includes(char)) continue;
        else ans += char;
    }
    return ans;
}

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"
function longestCountryName(country) {
    let maxIdx = 0;
    for(let i=0; i<country.length; i++) {
        if (country[maxIdx].length < country[i].length) maxIdx = i;
    }
    return country[maxIdx];
}

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.
function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for(char in str) if (vowels.includes(char)) vowelCount += 1
    return vowelCount;
}

// Qs5. Write a JavaScript function to generate a random number within a range (start, end).
const range = function(start, end) {
    let diff = end - start + 1;
    return Math.floor(Math.random() * diff) + start;
}