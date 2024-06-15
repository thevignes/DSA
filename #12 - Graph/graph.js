class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // Handle errors
        const graph = this.adjacencyList;
        if (!graph[vertex]) {
            graph[vertex] = [];
        }
    }

    addEdge(vertex, destinationVertex, bidirectional = false) {
        // Handle errors
        const graph = this.adjacencyList;

        if (!graph[vertex]) {
            this.addVertex(vertex);
        }

        if (!graph[destinationVertex]) {
            this.addVertex(destinationVertex);
        }

        if (graph[vertex].indexOf(destinationVertex) === -1) {
            graph[vertex].push(destinationVertex);
        }
        
        if (bidirectional) {
            if (graph[destinationVertex].indexOf(vertex) === -1) {
                graph[destinationVertex].push(vertex);
            }
        }
    }

    deleteEdge(vertex, destinationVertex) {
        // Handle errors
        const graph = this.adjacencyList;
        if (graph[vertex]) {
            graph[vertex] = graph[vertex].filter(stay => stay !== destinationVertex);
        }
        if (graph[destinationVertex]) {
            graph[destinationVertex] = graph[destinationVertex].filter(stay => stay !== vertex);
        }
    }

    deleteVertex(vertex) {
        // Handle errors
        const graph = this.adjacencyList;
        if (graph[vertex]) {
            while (graph[vertex].length) {
                const adjacentVertex = graph[vertex].pop();
                this.deleteEdge(vertex, adjacentVertex);
            }
            delete graph[vertex];
        }
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    dfs(start) {
        const stack = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (stack.length > 0) {
            const vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

   
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('G');
graph.addEdge('A', 'B', true);
graph.addEdge('A', 'C', true);
graph.addEdge('B', 'C', true);
graph.addEdge('C', 'D', true);


console.log("Graph before deleting vertex:");
console.log(graph);

graph.deleteVertex('A');

console.log("Graph after deleting vertex:");
console.log(graph);

console.log("BFS traversal from vertex 'B':", graph.bfs('B'));
console.log("DFS traversal from vertex 'B':", graph.dfs('B'));
