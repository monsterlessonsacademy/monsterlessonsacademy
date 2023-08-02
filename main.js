class Stack {
  items = [];

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.size() - 1];
  }
}

const stack = new Stack();
stack.push({ id: "1", name: "foo" });
stack.push({ id: "2", name: "bar" });
stack.push({ id: "3", name: "baz" });
console.log(stack.size());
console.log(stack.isEmpty());
const firstElement = stack.pop();
console.log(firstElement, stack.items);
