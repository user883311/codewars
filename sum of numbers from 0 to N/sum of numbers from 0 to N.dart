/*
We want to generate a function that computes the series starting 
from 0 and ending until the given number following the sequence:
0 1 3 6 10 15 21 28 36 45 55 ....

which is created by
0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 
0+1+2+3+4+5+6+7 etc..

Input: LastNumber
Output:series and result

https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/dart
*/

class SequenceSum {
  static String showSequence(num n) {
    if (n == 0) {
      return "0=0";
    }
    if (n < 0) {
      return "$n<0";
    }

    int sum = 0;
    String str = "0";
    // print(iterable);
    for (var item = 1; item <= n; item++) {
      // print(item);
      sum += item;
      str += "+${item}";
    }
    // print(str + " = " + "${sum}");
    return str + " = " + "${sum}";
  }
}

void main() {
  print(SequenceSum.showSequence(0) == "0=0");
  print(SequenceSum.showSequence(6) == "0+1+2+3+4+5+6 = 21");
  print(SequenceSum.showSequence(-15) == "-15<0");
}
