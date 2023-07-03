// class BadQueue {
//   items = [];

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }

//   peek() {
//     return this.items[0];
//   }

//   size() {
//     return this.items.length;
//   }
// }

// const badQueue = new BadQueue();
// badQueue.enqueue({ id: "1", name: "foo" });
// badQueue.enqueue({ id: "2", name: "bar" });
// badQueue.enqueue({ id: "3", name: "baz" });
// console.log("size", badQueue.size());
// console.log("empty?", badQueue.isEmpty());
// console.log(badQueue.items);
// badQueue.dequeue();
// console.log("first", badQueue.items);
//

class GoodQueue {
  items = {};
  tail = 0;
  head = 0;

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    delete this.items[this.head];
    this.head++;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.items[this.head];
  }

  size() {
    return this.tail - this.head;
  }
}

const goodQueue = new GoodQueue();
goodQueue.enqueue({ id: "1", name: "foo" });
goodQueue.enqueue({ id: "2", name: "bar" });
goodQueue.enqueue({ id: "3", name: "baz" });
console.log("size", goodQueue.size());
console.log("empty?", goodQueue.isEmpty());
console.log(goodQueue.items);
goodQueue.dequeue();
console.log("first", goodQueue.items);
