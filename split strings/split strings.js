/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the 
missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/

function solution(str) {
    let result = [];
    str = (str.length % 2 === 1) ? str + "_" : str;
    for (i = 0; i < str.length; i = i + 2) {
        result.push(str.slice(i, i + 2));
    }
    return result;
}

console.log(solution(''));          // should return []
console.log(solution('abc'));        // should return ['ab', 'c_']
console.log(solution('abcdef'));     // should return ['ab', 'cd', 'ef']

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//     it("should test for something", function(){
//       Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//     });
//   });

