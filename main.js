class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.size++;
  }

  addByIndex(index, value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      return;
    }

    const previousNode = this.getByIndex(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.size++;
  }

  getByIndex(index) {
    let position = 0;
    let currentNode = this.head;

    while (position < index) {
      currentNode = currentNode.next;
      position++;
    }

    return currentNode;
  }

  removeByIndex(index) {
    let currentNode = this.head;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      const previousNode = this.getByIndex(index - 1);
      previousNode.next = previousNode.next.next;
    }

    this.size--;
  }
}

const singly = new SinglyLinkedList();
singly.add("a");
singly.add("b");
singly.add("c");
console.log(singly);
console.log(singly.getByIndex(0));
singly.removeByIndex(1);
singly.addByIndex(1, "f");
console.log(singly);
