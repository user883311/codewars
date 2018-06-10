/* There are a lot of opinions on how to hire coders, 
and most of them are terrible. The opinions, that is, 
not the coders. But a basic filter test to make sure 
someone can do what they say they can: that seems 
reasonable, and FizzBuzz is one of the more common 
tests. Even now, interviewers use it. 
https://www.youtube.com/watch?v=QPZ0pIK_wsc
*/

function solution1() {
    for (i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// more scalable
function solution2() {
    for (i = 1; i <= 20; i++) {
        var output = "";
        if (i % 3 === 0) {
            output += "Fizz"
        }
        if (i % 5 === 0) {
            output += "Buzz"
        }
        if (output === "") {
            output = i
        }
        console.log(output);
    }
}

solution2();