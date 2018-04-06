/* Where my anagrams at?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an 
array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

Source: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

tags: Algorithms, Strings */


function anagrams(word, words) {
  const tp1 = word.split("").sort();
  let result = [];
  words.forEach(element => {
    let tp2 = element.split("").sort();
    if (tp1.join("") === tp2.join("")) {
      result.push(element);
    }
  });
  return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // => []



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