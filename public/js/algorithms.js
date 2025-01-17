const graph1 = {
    nodes: [
        { id: 1, x: 100, y: 100, visited: false },
        { id: 2, x: 700, y: 100, visited: false },
        { id: 3, x: 400, y: 300, visited: false },
        { id: 4, x: 100, y: 500, visited: false },
        { id: 5, x: 700, y: 500, visited: false }
    ],
    edges: [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 3, end: 4 },
        { start: 4, end: 5 },
        { start: 5, end: 1 },
        { start: 1, end: 3 },
        { start: 2, end: 4 },
        { start: 3, end: 5 }
    ]
};

const graph2 = {
    nodes: [
        { id: 1, x: 100, y: 100, visited: false },
        { id: 2, x: 400, y: 100, visited: false },
        { id: 3, x: 700, y: 100, visited: false },
        { id: 4, x: 100, y: 300, visited: false },
        { id: 5, x: 400, y: 300, visited: false },
        { id: 6, x: 700, y: 300, visited: false },
        { id: 7, x: 100, y: 500, visited: false },
        { id: 8, x: 400, y: 500, visited: false },
        { id: 9, x: 700, y: 500, visited: false }
    ],
    edges: [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 4, end: 5 },
        { start: 5, end: 6 },
        { start: 7, end: 8 },
        { start: 8, end: 9 },
        { start: 1, end: 4 },
        { start: 4, end: 7 },
        { start: 2, end: 5 },
        { start: 5, end: 8 },
        { start: 3, end: 6 },
        { start: 6, end: 9 }
    ]
};

const graph3 = {
    nodes: [
        { id: 1, x: 100, y: 100, visited: false },
        { id: 2, x: 400, y: 100, visited: false },
        { id: 3, x: 700, y: 100, visited: false },
        { id: 4, x: 100, y: 300, visited: false },
        { id: 5, x: 400, y: 300, visited: false },
        { id: 6, x: 700, y: 300, visited: false },
        { id: 7, x: 100, y: 500, visited: false },
        { id: 8, x: 400, y: 500, visited: false },
        { id: 9, x: 700, y: 500, visited: false },
        { id: 10, x: 250, y: 200, visited: false },
        { id: 11, x: 550, y: 200, visited: false },
        { id: 12, x: 250, y: 400, visited: false },
        { id: 13, x: 550, y: 400, visited: false }
    ],
    edges: [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 4, end: 5 },
        { start: 5, end: 6 },
        { start: 7, end: 8 },
        { start: 8, end: 9 },
        { start: 1, end: 4 },
        { start: 4, end: 7 },
        { start: 2, end: 5 },
        { start: 5, end: 8 },
        { start: 3, end: 6 },
        { start: 6, end: 9 },
        { start: 10, end: 11 },
        { start: 11, end: 13 },
        { start: 13, end: 12 },
        { start: 12, end: 10 }
    ]
};

const graph4 = {
    nodes: [
        { id: 1, x: 100, y: 100, visited: false },
        { id: 2, x: 300, y: 50, visited: false },
        { id: 3, x: 500, y: 100, visited: false },
        { id: 4, x: 700, y: 50, visited: false },
        { id: 5, x: 200, y: 300, visited: false },
        { id: 6, x: 400, y: 350, visited: false },
        { id: 7, x: 600, y: 300, visited: false },
        { id: 8, x: 750, y: 350, visited: false },
        { id: 9, x: 300, y: 500, visited: false },
        { id: 10, x: 700, y: 500, visited: false }
    ],
    edges: [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 3, end: 4 },
        { start: 1, end: 5 },
        { start: 5, end: 6 },
        { start: 6, end: 7 },
        { start: 7, end: 8 },
        { start: 6, end: 9 },
        { start: 9, end: 10 },
        { start: 8, end: 10 },
        { start: 2, end: 6 },
        { start: 4, end: 7 }
    ]
};

const graph5 = {
    nodes: [
        { id: 1, x: 100, y: 100, visited: false },
        { id: 2, x: 300, y: 50, visited: false },
        { id: 3, x: 500, y: 100, visited: false },
        { id: 4, x: 700, y: 50, visited: false },
        { id: 5, x: 200, y: 300, visited: false },
        { id: 6, x: 400, y: 350, visited: false },
        { id: 7, x: 600, y: 300, visited: false },
        { id: 8, x: 750, y: 350, visited: false },
        { id: 9, x: 300, y: 500, visited: false },
        { id: 10, x: 700, y: 500, visited: false }
    ],
    edges: [
        { start: 1, end: 2, weight: 8 },
        { start: 2, end: 3, weight: 4 },
        { start: 3, end: 4, weight: 3 },
        { start: 1, end: 5, weight: 5 },
        { start: 5, end: 6, weight: 2 },
        { start: 6, end: 7, weight: 3 },
        { start: 7, end: 8, weight: 1 },
        { start: 6, end: 9, weight: 4 },
        { start: 9, end: 10, weight: 2 },
        { start: 8, end: 10, weight: 3 },
        { start: 2, end: 6, weight: 6 },
        { start: 4, end: 7, weight: 5 }
    ]
};

let currentGraph = graph1;
let currentGraphName = 'graph1';

function getNeighbors(nodeId) {
    const neighbors = [];
    currentGraph.edges.forEach(edge => {
        if (edge.start === nodeId) {
            neighbors.push(edge.end);
        } else if (edge.end === nodeId) {
            neighbors.push(edge.start);
        }
    });
    return neighbors;
}

function drawGraph(graph) {
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rysowanie krawędzi
    graph.edges.forEach(edge => {
        const startNode = graph.nodes.find(node => node.id === edge.start);
        const endNode = graph.nodes.find(node => node.id === edge.end);
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(endNode.x, endNode.y);
        ctx.strokeStyle = '#f39c12';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rysowanie wagi krawędzi
        if (edge.weight !== undefined) {
            const midX = (startNode.x + endNode.x) / 2;
            const midY = (startNode.y + endNode.y) / 2;
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.fillText(edge.weight, midX, midY);
        }
    });

    // Rysowanie wierzchołków
    graph.nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = node.visited ? '#2ecc71' : '#3498db';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rysowanie ID wierzchołka
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.fillText(node.id, node.x - 3, node.y + 3);
    });
}

function drawThumbnail(graph, canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rysowanie krawędzi
    graph.edges.forEach(edge => {
        const startNode = graph.nodes.find(node => node.id === edge.start);
        const endNode = graph.nodes.find(node => node.id === edge.end);
        ctx.beginPath();
        ctx.moveTo(startNode.x / 8, startNode.y / 8); // Skalowanie do miniatury
        ctx.lineTo(endNode.x / 8, endNode.y / 8); // Skalowanie do miniatury
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rysowanie wagi krawędzi
        if (edge.weight !== undefined) {
            const midX = (startNode.x + endNode.x) / 2 / 8;
            const midY = (startNode.y + endNode.y) / 2 / 8;
            ctx.fillStyle = '#000';
            ctx.font = '8px Arial';
            ctx.fillText(edge.weight, midX, midY);
        }
    });

    // Rysowanie wierzchołków
    graph.nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x / 8, node.y / 8, 5, 0, 2 * Math.PI); // Skalowanie do miniatury
        ctx.fillStyle = '#3498db';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

function updateGraph(graph, currentNode) {
    graph.nodes.forEach(node => {
        if (node.id === currentNode) {
            node.visited = true;
        }
    });
    drawGraph(graph);
}

function dfs(startNodeId) {
    const stack = [startNodeId];
    const visited = new Set();
    const visitOrder = []; // Tablica do zapisywania kolejności odwiedzanych wierzchołków

    function visit() {
        if (stack.length === 0) {
            console.log("Visit order: ", visitOrder); // Wyświetl kolejność odwiedzanych wierzchołków
            updateVisitOrderList(visitOrder); // Zaktualizuj element HTML
            return;
        }
        const nodeId = stack.pop();
        if (visited.has(nodeId)) {
            setTimeout(visit, 500);
            return;
        }

        visited.add(nodeId);
        visitOrder.push(nodeId); // Zapisz odwiedzony wierzchołek
        updateGraph(currentGraph, nodeId); // Aktualizuj stan grafu
        const neighbors = getNeighbors(nodeId);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) stack.push(neighbor);
        });

        if (stack.length > 0) {
            setTimeout(visit, 1000);  // Czas opóźnienia dla animacji
        }
    }

    visit();
}

function bfs(startNodeId) {
    const queue = [startNodeId];
    const visited = new Set();
    const visitOrder = []; // Tablica do zapisywania kolejności odwiedzanych wierzchołków

    function visit() {
        if (queue.length === 0) {
            console.log("Visit order: ", visitOrder); // Wyświetl kolejność odwiedzanych wierzchołków
            updateVisitOrderList(visitOrder); // Zaktualizuj element HTML
            return;
        }

        const nodeId = queue.shift();
        if (visited.has(nodeId)) {
            setTimeout(visit, 500);
            return;
        }

        visited.add(nodeId);
        visitOrder.push(nodeId); // Zapisz odwiedzony wierzchołek
        updateGraph(currentGraph, nodeId); // Aktualizuj stan grafu

        const neighbors = getNeighbors(nodeId);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) queue.push(neighbor);
        });

        if (queue.length > 0) {
            setTimeout(visit, 1000);  // Czas opóźnienia dla animacji
        }
    }

    visit();
}

function dijkstra(startNodeId) {
    if(currentGraph.edges[0].weight === undefined) {
        bfs(startNodeId);
        return;
    }

    const distances = {};
    const visited = new Set();
    const visitOrder = [];
    const priorityQueue = new PriorityQueue();

    currentGraph.nodes.forEach(node => {
        distances[node.id] = Infinity;
    });
    distances[startNodeId] = 0;
    priorityQueue.enqueue(startNodeId, 0);

    function visit() {
        if (priorityQueue.isEmpty()) {
            console.log("Visit order: ", visitOrder);
            updateVisitOrderList(visitOrder);
            return;
        }

        const { element: nodeId } = priorityQueue.dequeue();
        if (visited.has(nodeId)) {
            setTimeout(visit, 500);
            return;
        }

        visited.add(nodeId);
        visitOrder.push(nodeId);
        updateGraph(currentGraph, nodeId);

        const neighbors = getNeighbors(nodeId);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                const edge = currentGraph.edges.find(e => (e.start === nodeId && e.end === neighbor) || (e.start === neighbor && e.end === nodeId));
                const newDist = distances[nodeId] + edge.weight;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    priorityQueue.enqueue(neighbor, newDist);
                }
            }
        });

        if (!priorityQueue.isEmpty()) {
            setTimeout(visit, 500);
        } else {
            console.log("Visit order: ", visitOrder);
            updateVisitOrderList(visitOrder);
        }
    }

    visit();
}

function astar(startNodeId, goalNodeId) {
    const distances = {};
    const visited = new Set();
    const visitOrder = []; // Tablica do zapisywania kolejności odwiedzanych wierzchołków
    const priorityQueue = new PriorityQueue();

    currentGraph.nodes.forEach(node => {
        distances[node.id] = Infinity;
    });
    distances[startNodeId] = 0;
    priorityQueue.enqueue(startNodeId, 0);

    function heuristic(nodeId) {
        const node = currentGraph.nodes.find(n => n.id === nodeId);
        const goalNode = currentGraph.nodes.find(n => n.id === goalNodeId);
        return Math.abs(node.x - goalNode.x) + Math.abs(node.y - goalNode.y);
    }

    function visit() {
        if (priorityQueue.isEmpty()) {
            console.log("Visit order: ", visitOrder); // Wyświetl kolejność odwiedzanych wierzchołków
            updateVisitOrderList(visitOrder); // Zaktualizuj element HTML
            if (!visited.has(goalNodeId)) {
                alert("Nie ma drogi do wierzchołka docelowego.");
            }
            return;
        }

        const { element: nodeId } = priorityQueue.dequeue();
        if (visited.has(nodeId)) {
            setTimeout(visit, 500);
            return;
        }

        visited.add(nodeId);
        visitOrder.push(nodeId); // Zapisz odwiedzony wierzchołek
        updateGraph(currentGraph, nodeId); // Aktualizuj stan grafu

        if (nodeId === goalNodeId) {
            console.log("Visit order: ", visitOrder); // Wyświetl kolejność odwiedzanych wierzchołków
            updateVisitOrderList(visitOrder); // Zaktualizuj element HTML
            return;
        }

        const neighbors = getNeighbors(nodeId);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                const newDist = distances[nodeId] + 1; // Zakładamy, że wszystkie krawędzie mają wagę 1
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    priorityQueue.enqueue(neighbor, newDist + heuristic(neighbor));
                }
            }
        });

        setTimeout(visit, 500);  // Czas opóźnienia dla animacji
    }

    visit();
}

function updateVisitOrderList(visitOrder) {
    const visitOrderList = document.getElementById('visitOrderList');
    visitOrderList.innerHTML = ''; // Wyczyść poprzednią zawartość
    visitOrder.forEach(nodeId => {
        const listItem = document.createElement('span');
        listItem.textContent = `Wierzchołek ${nodeId}`;
        listItem.classList.add('visit-order-item');
        visitOrderList.appendChild(listItem);
    });

    // Pokaż kontener z kolejnością odwiedzanych wierzchołków
    document.getElementById('visitOrderContainer').style.display = 'block';
}

// Funkcja uruchamiająca algorytm
function runAlgorithm(algorithmKey, startNodeId) {
    resetGraph();
    console.log("Running algorithm: " + algorithmKey);
    console.log("Starting from node: " + startNodeId);
    if (algorithmKey === "dfs") {
        dfs(startNodeId);
    } else if (algorithmKey === "bfs") {
        bfs(startNodeId);
    } else if (algorithmKey === "dijkstra") {
        dijkstra(startNodeId);
    } else if (algorithmKey === "astar") {
        const goalNodeId = parseInt(prompt("Podaj ID wierzchołka docelowego:"));   
        astar(startNodeId, goalNodeId);
    }
}

function resetGraph() {
    currentGraph.nodes.forEach(node => {
        node.visited = false;
    });
    drawGraph(currentGraph);
    document.getElementById('visitOrderList').innerHTML = ''; // Wyczyść listę odwiedzonych wierzchołków
    document.getElementById('visitOrderContainer').style.display = 'none'; // Ukryj kontener z kolejnością odwiedzanych wierzchołków
}

// Funkcja, aby zaktualizować opcje wierzchołków startowych w formularzu
function updateStartNodeOptions() {
    const selectNode = document.getElementById('startNode');
    selectNode.innerHTML = ''; // Wyczyść poprzednie opcje
    currentGraph.nodes.forEach(node => {
        const option = document.createElement('option');
        option.value = node.id;
        option.textContent = `Wierzchołek ${node.id}`;
        selectNode.appendChild(option);
    });
}

// Funkcja, aby załadować wybrany graf
function loadGraph(graphKey) {
    switch (graphKey) {
        case 'graph1':
            currentGraph = graph1;
            currentGraphName = 'graph1';
            break;
        case 'graph2':
            currentGraph = graph2;
            currentGraphName = 'graph2';
            break;
        case 'graph3':
            currentGraph = graph3;
            currentGraphName = 'graph3';
            break;
        case 'graph4':
            currentGraph = graph4;
            currentGraphName = 'graph4';
            break; 
        case 'graph5':
            currentGraph = graph5;
            currentGraphName = 'graph5';
            break;  
        default:
            currentGraph = graph1;
            currentGraphName = 'graph1';
    }
    drawGraph(currentGraph);
    updateStartNodeOptions();
}

// Klasa PriorityQueue dla algorytmów Dijkstra i A*
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}