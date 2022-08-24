const SECOND_TO_LAST = 2; // Diferença para pegar o penúltimo valor.

class Node {
  constructor(value, last, next = null) {
    this.value = value;
    this.next = next;

    // Quando passar o 'Last', adicionamos o novo Nó no ponteiro dele.
    if (last)  {
      return last.next = {
        value: this.value,
        next: this.next
      };
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  set add(value) {
    this.last = new Node(value, this.last); // Novo Nó no último.

    /*
     No início fazemos uma "conexão" entre o 'Head' e o 'Last'.
     Quando mudarmos o 'Last' irá refletir no 'Head', assim se atualizando.
    */
    if (this.length === 0) {
      this.head = this.last;
    }

    this.#increment();
  }

  #increment() {
    this.length += 1;
  }

  #decrement() {
    this.length -= 1;
  }

  clean() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  getByIndex(index) {
    if (!this.length || index > this.length) return null;

    let node = this.head; // Armazenamos toda a lista em uma auxiliar
    let count = 0;

    // Navega entre os dados acessando e armazenando o próximo(ponteiro)
    while (count < index && node.next) {
      node = node.next;
      count++;
    }

    return node;
  }

  getByValue(value) {
    if (!this.length) return null;

    let node = this.head;

    // Caso valor esteja no primeiro Nó.
    if (node.value === value) return node;

    // Pegamos o próximo Nó, comparamos o valor senão, se existi um próximo Nó.
    while (node.next) {
      node = node.next;

      if (node.value === value) return node;
      if (node.next === null) return (node = null);
    }

    return node;
  }

  removeLast() {
    if (!this.length) return;

    // Remove o único nó.
    if (this.length === 1) {
      this.head = null;
      this.last = null;
      this.#decrement();
      return;
    }

    let node = this.head;
    let count = 0;

    while (node.next) {
      // Se estivermos no penúltimo Nó, limpamos o ponteiro dele, no caso o último Nó.
      if (count === this.length - SECOND_TO_LAST) {
        node.next = null;
        this.last = node; // Agora o último passa a ser o Nó atual.
        this.#decrement();
       
        return;
      }

      node = node.next;
      count++
    }
  }

  removeByNode(nodeToRemove) {
    if (!this.length) return;

    // O segundo nó passa a ser o primeiro.
    if (nodeToRemove === this.head) {
      this.head = nodeToRemove.next;
      this.#decrement();
      return;
    }

    let node = this.head;

    // Quando o próximo nó for o desejado para a iteração.
    while (node.next && node.next !== nodeToRemove) {
      node = node.next
    }

    /*
      O ponteiro do nó atual recebe o ponteiro do nó que queremos remover,
      assim cortando(Slice).
    */
    node.next = nodeToRemove.next;
    this.#decrement();
  }
}

module.exports = {
  LinkedList
}
