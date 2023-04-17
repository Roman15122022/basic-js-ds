const { NotImplementedError } = require('../extensions/index.js');


class Stack {
  constructor() {
    this.stack = []
  }

  push(elem) {
    this.stack.push(elem)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}

module.exports = {
  Stack
};