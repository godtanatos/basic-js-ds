const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let tmp = l;
  let prevTmp = tmp;
  let curIndex = 0;
  while (tmp) {
    if (tmp.value === k) {
      if (!tmp.next && curIndex != 0) {
        prevTmp.next = null;
        break;
      }
      if (!tmp.next && curIndex === 0) {
        console.log("Ups...");
      }
      tmp.value = tmp.next.value;
      tmp.next = tmp.next.next;
    } else {
      if (!tmp.next) {
        break;
      }
      prevTmp = tmp;
      tmp = tmp.next;
      curIndex++;
    }
  }
  return l;
}
module.exports = {
  removeKFromList,
};
