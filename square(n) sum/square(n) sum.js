/*
Complete the squareSum/square_sum/SquareSum method so that 
it squares each number passed into it and then sums the 
results together.

For example:
squareSum([1, 2, 2]); // should return 9

https://www.codewars.com/kata/square-n-sum/train/javascript
*/

function squareSum(numbers) {
    let res = 0;
    numbers.forEach(element => {
        res += element * element;
    });
    return res;
}