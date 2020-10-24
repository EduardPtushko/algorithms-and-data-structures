export class Graph {
    adjacencyList: Record<string, string[]>;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    removeVertex(vertex: string) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop() as string;
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            el => el !== vertex2,
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            el => el !== vertex1,
        );
    }
}
