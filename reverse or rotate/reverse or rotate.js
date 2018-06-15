/*
The input is a string str of digits. Cut the string into 
chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the 
cubes of its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. Put together 
these modified chunks and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
 */

function revrot(str, sz) {
    let l = str.length;
    if (str === "" || sz > l || sz === 0) {
        return "";
    };

    let chunksNumber = Math.floor(l / sz);
    let res = "";
    for (let index = 0; index < chunksNumber; index++) {
        let chunk = str.split("").slice(index * sz, index * sz + sz).join("");
        console.log(chunk);
        let sum=0;
        chunk.split("").forEach(el => {
            let digit = parseInt(el,10);
            sum += digit * digit * digit;
        });
        if (sum % 2 === 0) {
            console.log("reverse");
            res += reverseString(chunk);
        } else {
            console.log("rotate");
            res += rotateString(chunk, 1);
        }
    }
    return res;

    function reverseString(str) {
        return str.split("").reverse().join("");
    };

    function rotateString(str, tick) {
        return str.slice(tick) + str.slice(0, tick);
    };
}

// console.log(revrot("733049910872815764", 5)); //330479108928157
// console.log(revrot("1234", 0)); //""
// console.log(revrot("", 0)); //""
// console.log(revrot("1234", 5)); //""
// console.log(revrot("5630", 4)); //"0365"
// console.log(revrot("123456779", 8)); //"23456771"
console.log(revrot("123456987654", 6)); //"234561876549"

// console.log(revrot("66443875", 4)); //"44668753"
// console.log(revrot("563000655734469485", 4)); //"0365065073456944"


// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// Test.describe("revrot",function() {
//     Test.it("Basic tests",function() {    
//         testing(revrot("1234", 0), "")
//         testing(revrot("", 0), "")
//         testing(revrot("1234", 5), "")
//         s = "733049910872815764"
//         testing(revrot(s, 5), "330479108928157")
// })})