// Vértice armazena o valor e as respectivas arestas de saída ou entrada.

class Vertex {
  constructor(value) {
    this.value = value;
    this.indegrees = [];
    this.outdegrees = [];
  }

  addEdgeIndegree(edge) {
    this.indegrees.push(edge);
  }

  addEdgeOutdegree(edge) {
    this.outdegrees.push(edge);
  }
}

module.exports = {
  Vertex
}