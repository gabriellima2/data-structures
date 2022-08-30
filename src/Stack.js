// LIFO(Last In First Out): Último a entrar é o primeiro a sair.

class Stack {
  #top;
  constructor() {
    this.data = [];
    this.#top = -1; // Index do item a ser desempilhado
  }

  #isEmpty() {
    return this.#top === -1;
  }

  #remove() {  
    this.data.splice(this.#top, 1);
    this.#top--;
  }

  set add(value) {
    this.#top++;
    this.data[this.#top] = value;
  }

  // Desempilha, retornando o valor.
  get peek() {
    if (this.#isEmpty()) return -1;

    const value = this.data[this.#top];
    this.#remove();

    return value;
  }

  get length() {
    return this.#top + 1;
  }
}

const books = new Stack();

books.add = "Clean Code";
books.add = "Introduction to Algorithms";
books.add = "Design Patterns";
books.add = "Data Structures";

console.log(books.peek);

