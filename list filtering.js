/* In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.

Examples: 
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] 

https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
*/

function filter_list(l) {
  // Return a new array with the strings filtered out
  let result = [];
  l.forEach(element => {
    if (typeof (element) === "number") {
      result.push(element);
    }
  });
  return result;
}

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function isString(a) {
    return (typeof (a) === "number");
  })
}

console.log(filter_list([1, 2, 'a', 'b']));                   // [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15]));               // [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));    // [1, 2, 123]