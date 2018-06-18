bool validParentheses(String braces) {
  String b = braces;
  // remove all non parenthesis characters
  b = b.replaceAll(new RegExp(r"[^\(\)]"), "");
  // while there are "()", remove all "()"
  while (b.contains("()")) {
    b = b.replaceAll(new RegExp(r"\(\)"), "");
  }
  // if result is "" then valid
  // otherwise if smtg left, not valid
  return b.isEmpty;
}

void main() {
  print(validParentheses('()') == true);
  print(validParentheses('()()') == true);
  print(validParentheses('(())') == true);
  print(validParentheses(')') == false);
  print(validParentheses('())') == false);
  print(validParentheses('((((()))))') == true);
  print(validParentheses('()()()())') == false);
  print(validParentheses('(()()()())(())') == true);
  print(validParentheses('((((((((') == false);
  print(validParentheses('(())((()((()))))') == true);
  print(validParentheses('())(') == false);
  print(validParentheses(')()()()(') == false);
  print(validParentheses('(()()))(') == false);
  print(validParentheses(')()(') == false);
}
