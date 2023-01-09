// Armazena o peso e as vértices que estão saindo ou entrando na aresta.

class Edge {
  constructor(weight, vertexIndegree, vertexOutdegree) {
    this.weight = weight;
    this.vertexIndegree = vertexIndegree;
    this.vertexOutdegree = vertexOutdegree;
  }
}

module.exports = {
  Edge
}