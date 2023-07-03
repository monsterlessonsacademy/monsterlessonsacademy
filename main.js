class GoodQueue {
  items = {};
  tail = 0;
  head = 0;

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.items[this.head];
  }
}

const goodQueue = new GoodQueue();
goodQueue.enqueue({ id: "1", name: "foo" });
goodQueue.enqueue({ id: "2", name: "bar" });
goodQueue.enqueue({ id: "3", name: "baz" });
console.log(goodQueue.size());
console.log(goodQueue.isEmpty());
const firstElement = goodQueue.dequeue();
console.log(firstElement, goodQueue.items);
