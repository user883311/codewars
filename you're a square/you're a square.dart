/* Given an integral number, determine if it's a 
square number:

In mathematics, a square number or perfect square 
is an integer that is the square of an integer; in 
other words, it is the product of some integer with 
itself.

The tests will always use some integral number, so 
don't worry about that in dynamic typed languages.

Examples:
---------
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
*/
bool isSquare(int n) {
  if (n < 0) {
    return false;
  } else {
    for (var i = 0; i < n / 2 + 1; i++) {
      if (i * i == n) {
        return true;
      }
    }
    return false;
  }
}

void main() {
  print(isSquare(4).toString());
}

/*
test('should work for some examples', () {
  expect(isSquare(-1), isFalse);
  expect(isSquare(0), isTrue);
  expect(isSquare(3), isFalse);
  expect(isSquare(4), isTrue);
  expect(isSquare(25), isTrue);
  expect(isSquare(26), isFalse);
});

test('should work for random square numbers', () {
  var r = new Math.Random();
  new List.generate(100,(i) => i).forEach((n) {
    var x = r.nextInt(65520);
    expect(isSquare(x*x), isTrue);
  });
});
*/
