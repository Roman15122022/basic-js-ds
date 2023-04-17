const { NotImplementedError, ListNode } = require('../extensions/index.js');

class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  getUnderlyingList() {
    return this.head;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

}

module.exports = {
  Queue
};
