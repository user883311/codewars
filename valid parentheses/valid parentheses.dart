bool validParentheses(String braces) {
  String braces2 = braces;
  // remove all non parenthesis characters
  braces2 = braces2.replaceAll(new RegExp(r"[^\(\)]"), "");
  // while there are "()", remove all "()"
  while (braces2.contains("()")) {
    braces2 = braces2.replaceAll(new RegExp(r"\(\)"), "");
  }
  // if result is "" then valid
  // otherwise if smtg left, not valid
  return braces2 == "";
}