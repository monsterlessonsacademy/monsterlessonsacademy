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
    if (this.size === 0) {
      this.add(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode;
    let position = 0;

    while (position < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      position++;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;
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
    let previousNode;
    let position = 0;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (position < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        position++;
      }

      previousNode.next = currentNode.next;
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
// singly.removeByIndex(1);
singly.addByIndex(1, "f");
console.log(singly);
