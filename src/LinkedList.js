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

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }

    return -1;
  }

  toString() {
    let current = this.head;
    let output = '';

    if (current === null) return '';

    while (current !== null) {
      output += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    output += 'null';
    return output;
  }

  insertAt(index, ...values) {
    if (index < 0) throw new RangeError();

    if (values.length === 0) return;

    if (this.head === null && index > 0) {
      throw new RangeError();
    }

    if (index === 0) {
      const firstNewNode = new Node(values[0]);
      let tail = firstNewNode;

      for (let i = 1; i < values.length; i++) {
        tail.nextNode = new Node(values[i]);
        tail = tail.nextNode;
      }

      tail.nextNode = this.head;
      this.head = firstNewNode;

      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current === null) throw new RangeError();
      current = current.nextNode;
    }

    const firstNewNode = new Node(values[0]);
    let tail = firstNewNode;

    for (let i = 1; i < values.length; i++) {
      tail.nextNode = new Node(values[i]);
      tail = tail.nextNode;
    }

    const after = current.nextNode;
    current.nextNode = firstNewNode;
    tail.nextNode = after;
  }

  removeAt(index) {
    if (index < 0) throw new RangeError();

    if (this.head === null) throw new RangeError();

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let prev = this.head;
    let current = this.head.nextNode;
    let currentIndex = 1;

    while (current !== null && currentIndex < index) {
      prev = current;
      current = current.nextNode;
      currentIndex++;
    }

    if (current === null) throw new RangeError();

    prev.nextNode = current.nextNode;
  }
}

export default LinkedList;
