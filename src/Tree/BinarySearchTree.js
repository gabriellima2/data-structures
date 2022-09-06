const { BinaryTree } = require("./BinaryTree.js");

class BinarySearchTree extends BinaryTree {
  insert(value, node = this.root) {
    // Adiciona o valor quando estiver em um nó vazio (Folha)
    if (!node.value) {
      node.value = value;
      node.right = {};
      node.left = {};
      return;
    };
    
    // Valor menor que o atual para Esq, Valor maior que o atual para Dir.
    if (value < node.value) return this.insert(value, node.left);

    this.insert(value, node.right);
  }

  /* Fazemos a busca, navegando pela ordenação que fizemos, valor menor que o
    atual para Esq e o valor maior que o atual para Dir.*/
  search(value, node = this.root) {
    if (!node || node.value === value) return node;

    if (value < node.value)  return this.search(value, node.left)
    
    return this.search(value, node.right);
  }
}

const myTree = new BinarySearchTree(10);

myTree.insert(20);
myTree.insert(5);
myTree.insert(8);

console.log(myTree)
console.log(myTree.getHeight());
