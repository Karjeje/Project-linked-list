import Node from './Node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  getHead() {
    if (this.head === null) return undefined;
    return this.head.value;
  }

  getTail() {
    if (this.head === null) return undefined;

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current === null) return undefined;
      current = current.nextNode;
    }
    if (current === null) return undefined;
    return current.value;
  }

  //   popTail() {
  //     if (this.head === null) return undefined;

  //     if (this.head.nextNode === null) {
  //       let onlyNode = this.head.value;
  //       this.head = null;
  //       return onlyNode;
  //     }

  //     let current = this.head;
  //     while (current.nextNode.nextNode !== null) {
  //       current = current.nextNode;
  //     }
  //     const deletedNode = current.nextNode.value;
  //     current.nextNode = null;
  //     return deletedNode;
  //   }

  pop() {
    if (this.head === null) return undefined;
    const value = this.head.value;
    this.head = this.head.nextNode;
    return value;
  }
}

export default LinkedList;
