class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value = null) {
    if (value) {
      return this.root = new Node(value);
    }

    this.root = null;
  }

  // Navega entre todos os nós, se tiver nó para a direção especificada.
  preOrder(node = this.root) {
    console.log(node); // Fazemos algo antes da navegação.

    node.left && this.preOrder(node.left);
    node.right && this.preOrder(node.right);
  }

  inOrder(node = this.root) {
    node.left && this.inOrder(node.left);
    console.log(node); // Fazemos algo depois da navegação para Esq.
    node.right && this.inOrder(node.right);
  }

  posOrder(node = this.root) {
    node.left && this.posOrder(node.left);
    node.right && this.posOrder(node.right);

    console.log(node); // Fazemos algo depois da navegação em todas as direções.
  }

  /* Buscamos a altura da árvore, buscando o lado com maior quantidade de nós
    da Raiz até a folha(Nó vazio) */
  getHeight(node = this.root) {
    let leftSideHeight = 0;
    let rightSideHeight = 0;

    if (node.left) {
      leftSideHeight = this.getHeight(node.left);
    }

    if (node.right) {
      rightSideHeight = this.getHeight(node.right);
    }

    if (leftSideHeight > rightSideHeight) return rightSideHeight + 1;

    return leftSideHeight + 1;
  }
}
