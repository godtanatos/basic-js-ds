/* const { NotImplementedError } = require("../extensions/index.js"); */

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode ? this.rootNode : null;
  }

  add(data) {
    console.log(data);
    if (!this.rootNode) {
      this.rootNode = new nodeTree(data);
    } else {
      let node = this.rootNode;
      let newNode = new nodeTree(data);
      while (node) {
        if (data > node.data) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }
      if (data > node.data) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }

  has(data) {
    let returnValue = false;
    if (!this.rootNode) {
      returnValue = false;
    } else {
      let node = this.rootNode;
      while (node) {
        if (data === node.data) {
          returnValue = true;
          break;
        } else {
          if (data > node.data) {
            if (!node.right) {
              break;
            }
            node = node.right;
          } else {
            if (!node.left) {
              break;
            }
            node = node.left;
          }
        }
      }
    }
    return returnValue;
  }

  find(data) {
    let returnValue = null;
    if (!this.rootNode) {
    } else {
      let node = this.rootNode;
      while (node) {
        if (data === node.data) {
          returnValue = node;
          break;
        } else {
          if (data > node.data) {
            if (!node.right) {
              break;
            }
            node = node.right;
          } else {
            if (!node.left) {
              break;
            }
            node = node.left;
          }
        }
      }
    }
    return returnValue;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let minValue;
    if (!this.rootNode) {
    } else {
      if (this.rootNode.left) {
        let node = this.rootNode.left;
        while (node) {
          if (!node.left) {
            minValue = node.data;
            break;
          }
          node = node.left;
        }
      } else {
        minValue = this.rootNode.data;
      }
      return minValue;
    }
  }
  max() {
    let maxValue;
    if (!this.rootNode) {
    } else {
      if (this.rootNode.right) {
        let node = this.rootNode.right;
        while (node) {
          if (!node.right) {
            maxValue = node.data;
            break;
          }
          node = node.right;
        }
      } else {
        maxValue = this.rootNode.data;
      }
      return maxValue;
    }
  }
}
class nodeTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree,
};
