class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(text) {
    this.items.push(text);
  }

  removeItem(index) {
    this.items = items.splice(index, 1);
  }

  toString() {
    return this.items.toString();
  }
}

class DatabaseManager {
  saveToFile(data, filename) {
    fs.writeFileSync(filename, data.toString());
  }

  loadFromFile(filename) {
    // Some implementation
  }
}
