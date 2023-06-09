class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        throw new Error('Vertex does not exist in the graph');
      }
  
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    breadthFirstSearch(startVertex) {
      if (!this.vertices.has(startVertex)) {
        throw new Error('Vertex does not exist in the graph');
      }
  
      const visited = new Set();
      const queue = [];
  
      queue.push(startVertex);
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.vertices.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('D', 'E');
  
  graph.breadthFirstSearch('B');
  
  //https://youtu.be/dfaKCrJ2HAk
  //https://youtu.be/TIbUeeksXcI