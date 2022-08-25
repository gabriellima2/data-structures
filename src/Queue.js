// FIFO(First In First Out): Primeiro a entrar é o primeiro a sair.

class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  #getFirstValue() {
    return this.data[0]
  }

  // Adicionamos o valor no final da Fila.
  set enqueue(value) {
    this.data = [...this.data, value];
    this.length++;
  }

  // Desfileiramos removendo o primeiro valor.
  get dequeue() {
    if (this.length < 0) return -1;

    // Guardamos o valor, para retorná-lo e apagá-lo da Fila.
    const firstValue = this.#getFirstValue();

    this.data.shift();
    this.length--;

    return firstValue;
  }
}

const messages = new Queue();

messages.enqueue = "Hello World!";
messages.enqueue = "This is a Queue";
console.log(messages.dequeue)
console.log(messages.dequeue)

messages.enqueue = "Cool!";
console.log(messages.dequeue)

