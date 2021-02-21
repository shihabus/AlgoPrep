// INPUT
// a string of brackets `{}[]()`

// OUTPUT
// if all the opening brackets are closed, then the string is balanced

const input = "{({[]})[]{}}";
function balancedBrackets(str) {
  const openingBrackets = "[{(";
  const closingBrackets = ")}]";

  const matchingBrackets = { "]": "[", ")": "(", "}": "{" };

  const stack = [];

  for (const char of str) {
    //  add to stack if it is an opening bracket
    if (openingBrackets.includes(char)) {
      stack.push(char);
    }
    // if it is a closing bracket
    else if (closingBrackets.includes(char)) {
      // not balanced if there isn't any corresponding opening bracket
      if (!stack.length) {
        return false;
      }
      // if last entry in stack match corresponding opening bracket
      // pop the last value to eliminate the bracket pair
      if (stack[stack.length - 1] == matchingBrackets[char]) {
        stack.pop();
      }
      // if bracket pair doesn't match
      else {
        return false;
      }
    }
  }
  // is balanced if the stack is empty
  return !stack.length;
}

balancedBrackets(input);
