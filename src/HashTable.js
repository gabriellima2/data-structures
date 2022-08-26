const { LinkedList } = require("./LinkedList.js");

class HashTable {
  constructor(length = 10) {
    this.data = new Array(length);
    this.length = length;
  }

  #generateHash(key) {
    return this.length % key.length;
  }
  
  set add(key) {
    const hash = this.#generateHash(key);

    if (!this.data[hash]) {
      this.data[hash] = new LinkedList();
    }

    this.data[hash].add = key;
  }

  getKey(key) {
    const hash = this.#generateHash(key);
    const keyNode = this.data[hash].getByValue(key);

    return keyNode;
  }

  removeKey(key) {
    const hash = this.#generateHash(key);
    const keyNode = this.getKey(key);
    
    this.data[hash].removeByNode(keyNode);
  }
}
