const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.node = null;
  }
  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (!this.node) {
      this.node = { value: value, next: null };
    } else {
      let tmpNode = this.node;
      while (tmpNode) {
        if (!tmpNode.next) {
          tmpNode.next = { value: value, next: null };
          break;
        }
        tmpNode = tmpNode.next;
      }
    }
  }

  dequeue() {
    let value;
    if (!this.node) {
      return null;
    }
    if (!this.node.next) {
      value = this.node.value;
      this.node = null;
    } else {
      value = this.node.value;
      this.node.value = this.node.next.value;
      this.node.next = this.node.next.next;
    }
    return value;
  }
}

module.exports = {
  Queue,
};
