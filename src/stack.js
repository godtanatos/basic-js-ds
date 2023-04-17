const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }
  push(/* element */) {
    let argLength = arguments.length;
    let arrLength = this.arr.length;
    for (var i = 0; i < argLength; i++) {
      this.arr[arrLength + i] = arguments[i];
    }
    return this.length;
  }

  pop() {
    let arrLength = this.arr.length;
    let deleteObj = this.arr[arrLength - 1];
    this.arr.length = arrLength - 1;
    return deleteObj;
  }

  peek() {
    let arrLength = this.arr.length;
    return this.arr[arrLength - 1];
  }
}

module.exports = {
  Stack,
};
