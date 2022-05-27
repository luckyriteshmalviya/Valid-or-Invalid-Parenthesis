/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
    s = "()"                 ->  true
    s = "([])"               ->  true
    s = "([)]"               ->  false
    s = "(()[]"              ->  false
    s = "{(([]))}"           ->  true

 */

/**Approach
 * Create a blank array (Stack).
 * Create a loop starting from 0 to the length of string.
 * Put the value in stack one by one.
 * We have to check that if any kind of bracket make a valid pair in two adjacent index of stack.
 * If yes then we will remove it and then again check for it.
 * For this make three If-Else condition.
 * Check if the last two index make a valid pair then remove it by using pop twice in stack.
 * In that way complete the loop.
 * IF after completion of loop stack is empty then it is valid parenthesis.
 * If stack has remaining any bracket then it is invalid parenthesis.
 * Create an another If-else condition to convert the answer in boolean.
 */

var isValid = function (s) {
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack[stack.length - 2] == "(" && stack.at(-1) == ")") {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 2] == "{" && stack.at(-1) == "}") {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 2] == "[" && stack.at(-1) == "]") {
      stack.pop();
      stack.pop();
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("{(([]))}"));
