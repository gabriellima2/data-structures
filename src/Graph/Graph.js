const { Vertex } = require("./Vertex");
const { Edge } = require("./Edge");

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.vertices.push(vertex);
  }

  // Procura as vértices que vão receber a entrada e saída da aresta.
  addEdge({
    weight,
    vertexValueToEdgeIndegree,
    vertexValueToEdgeOutdegree
  }) {
    const vertexToEdgeIndegree = this.#searchVertexByValue(this.vertices, vertexValueToEdgeIndegree);
    const vertexToEdgeOutdegree = this.#searchVertexByValue(this.vertices, vertexValueToEdgeOutdegree);

    if (!vertexToEdgeIndegree || !vertexToEdgeOutdegree) return;

    // Cria uma aresta passando o peso e as vértices achadas.
    const edge = new Edge(weight, vertexToEdgeIndegree, vertexToEdgeOutdegree);

    // Adiciona nas vértices (entrada e saida) a nova aresta.
    vertexToEdgeIndegree.addEdgeIndegree(edge);
    vertexToEdgeOutdegree.addEdgeOutdegree(edge);
    
    this.edges.push(edge);
  }

  // Busca em largura
  breadthFirstSearch() {
    const queue = [];
    const verticesAlreadyVisited = [];
    const initialVertex = this.vertices[2];

    function logInOrder(vertex) {
      verticesAlreadyVisited.push(vertex);
      console.log(vertex);
      queue.push(vertex);
    }

    logInOrder(initialVertex)
    while (queue.length > 0) {
      const vertexVisited = initialVertex;
      const outdegreesLength = vertexVisited.outdegrees.length;

      // Percorremos todas as arestas de saída da vértice atual
      for (let index = 0; index < outdegreesLength; index++) {
        const nextVertex = vertexVisited.outdegrees[index].vertexIndegree;
        const vertexHasNotBeenVisited =
          !this.#searchVertexByValue(verticesAlreadyVisited, nextVertex.value);

        if (vertexHasNotBeenVisited) {
          logInOrder(nextVertex);
        }
      }

      // Remove a vértice da fila.
      queue.shift();
    }
  }

  #searchVertexByValue(vertices, value) {
    return vertices.find((vertex) => vertex.value === value);
  }
}

const graph = new Graph();
graph.addVertex("João");
graph.addVertex("Gabriel");
graph.addVertex("Gustavo");

graph.addEdge({
  weight: 4,
  vertexValueToEdgeIndegree: "João",
  vertexValueToEdgeOutdegree: "Gabriel"
});
graph.addEdge({
  weight: 10,
  vertexValueToEdgeIndegree: "Gabriel",
  vertexValueToEdgeOutdegree: "Gustavo"
});
graph.addEdge({
  weight: 3,
  vertexValueToEdgeIndegree: "João",
  vertexValueToEdgeOutdegree: "Gustavo"
});
graph.addEdge({
  weight: 4,
  vertexValueToEdgeIndegree: "Gabriel",
  vertexValueToEdgeOutdegree: "João"
});
graph.addEdge({
  weight: 3,
  vertexValueToEdgeIndegree: "Gustavo",
  vertexValueToEdgeOutdegree: "João"
});
graph.addEdge({
  weight: 10,
  vertexValueToEdgeIndegree: "Gabriel",
  vertexValueToEdgeOutdegree: "Gabriel"
});

graph.breadthFirstSearch();
