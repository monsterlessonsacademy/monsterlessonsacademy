class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  getByIndex(index) {
    let position = 0;
    let currentNode = this.head;

    while (position < index) {
      currentNode = currentNode.next;
      position++;
    }

    return currentNode;
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

  removeByIndex(index) {
    let currentNode = this.head;
    if (this.size === 0) {
      this.head = currentNode.next;
    } else {
      const previousNode = this.getByIndex(index - 1);
      previousNode.next = previousNode.next.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.addByIndex(1, 5);
linkedList.removeByIndex(1);
console.log(linkedList.getByIndex(1));
console.log(linkedList);
