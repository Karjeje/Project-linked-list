import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.prepend('bobakau');

let current = list.head;
while (current !== null) {
  console.log(current.value);
  current = current.nextNode;
}
