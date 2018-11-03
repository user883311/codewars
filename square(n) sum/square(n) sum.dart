/*
Complete the squareSum/square_sum/SquareSum method so 
that it squares each number passed into it and then 
sums the results together.

For example:
squareSum([1, 2, 2]); // should return 9

Source: https://www.codewars.com/kata/515e271a311df0350d00000f/train/dart
 */
int squareSum(List numbers) {
  int res = 0;
  for (var i = 0; i < numbers.length; i++) {
    res += numbers[i] * numbers[i];
  }
  return res;
}

void main() {
  print(squareSum([1, 2, 2]) == 9);
  print(squareSum([1, 2]) == 5);
  print(squareSum([0, 3, 4, 5]) == 50);
  print(squareSum([]) == 0);
  print(squareSum([-1, -2]) == 5);
  print(squareSum([-1, 0, 1]) == 2);
}
