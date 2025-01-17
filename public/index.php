<?php
require_once '../includes/session.php';
require_once '../includes/db.php';

$flashMessages = getFlashMessages();
$loadedSettings = $_SESSION['loaded_settings'] ?? null;
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Symulacje Algorytmów</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
<header>
    <h1>Symulacje Algorytmów</h1>
    <nav>
        <ul>
            <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
                <li><a href="public/logout.php">Wylogowanie</a></li>
                <li><a href="public/load_settings.php">Wczytaj ustawienia</a></li>
            <?php else: ?>
                <li><a href="public/login.php">Logowanie</a></li>
                <li><a href="public/register.php">Rejestracja</a></li>
            <?php endif; ?>
        </ul>
    </nav>
    <?php if ($flashMessages): ?>
        <div class="flash-messages">
            <?php foreach ($flashMessages as $type => $messages): ?>
                <?php foreach ($messages as $message): ?>
                    <div class="flash-message <?= htmlspecialchars($type) ?>">
                        <?= htmlspecialchars($message) ?>
                    </div>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</header>
<main>
    <section id="simulation">
        <h2>Symulacje algorytmów grafowych</h2>
        <div id="graph-thumbnails">
            <h3>Wybierz graf:</h3>
            <div class="thumbnail" data-graph="graph1">
                <canvas id="thumbnail1" width="100" height="100"></canvas>
            </div>
            <div class="thumbnail" data-graph="graph2">
                <canvas id="thumbnail2" width="100" height="100"></canvas>
            </div>
            <div class="thumbnail" data-graph="graph3">
                <canvas id="thumbnail3" width="100" height="100"></canvas>
            </div>
            <div class="thumbnail" data-graph="graph4">
                <canvas id="thumbnail4" width="100" height="100"></canvas>
            </div>
            <div class="thumbnail" data-graph="graph5">
                <canvas id="thumbnail5" width="100" height="100"></canvas>
            </div>
        </div>
        <canvas id="visualizer" width="800" height="600"></canvas>
        <div id="algorithm-controls">
            <form id="saveSettingsForm" method="POST" action="public/save_settings.php">
                <label for="algorithm">Wybierz algorytm:</label>
                <select id="algorithm" name="algorithm">
                    <option value="dfs" title="Przeszukiwanie w głąb (DFS) to algorytm przeszukiwania grafu, który zaczyna od wierzchołka startowego i eksploruje jak najdalej wzdłuż każdej gałęzi przed cofnięciem się.">Przeszukiwanie w głąb (DFS)</option>
                    <option value="bfs" title="Przeszukiwanie wszerz (BFS) to algorytm przeszukiwania grafu, który zaczyna od wierzchołka startowego i eksploruje wszystkie sąsiednie wierzchołki na bieżącym poziomie przed przejściem do wierzchołków na następnym poziomie.">Przeszukiwanie wszerz (BFS)</option>
                    <option value="dijkstra" title="Algorytm Dijkstry znajduje najkrótszą ścieżkę w grafie, zaczynając od wierzchołka startowego i odwiedzając wierzchołki o najmniejszym koszcie, aż do osiągnięcia celu.">Algorytm Dijkstry</option>
                    <option value="astar" title="Algorytm A* znajduje najkrótszą ścieżkę, używając funkcji heurystycznej do oszacowania kosztu dotarcia do celu, co pozwala na bardziej efektywne przeszukiwanie.">Algorytm A*</option>
                </select>
                <label for="startNode">Wybierz wierzchołek startowy:</label>
                <select id="startNode" name="startNode">
                </select>
                <input type="hidden" id="graph" name="graph">
                <input type="hidden" id="graphName" name="graphName">
                <button type="button" id="runAlgorithm">Uruchom</button>
                <button type="button" id="resetGraph">Resetuj</button>
                <button type="submit">Zapisz ustawienia</button>
            </form>
        </div>
        <div id="visitOrderContainer" style="display: none;">
            <h3>Kolejność odwiedzanych wierzchołków (od początkowego):</h3>
            <div id="visitOrderList"></div>
        </div>

        <?php if (!(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true)): ?>
        <p>Zaloguj się, aby móc zapisywać i wczytywać ustawienia algorytmów.</p>
        <?php endif; ?>
    </section>
</main>
<footer>
    <p>&copy; <?= date("Y") ?> Symulacje Algorytmów. Wszelkie prawa zastrzeżone.</p>
</footer>
<script src="public/js/algorithms.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {
    const loadedSettings = <?= json_encode($loadedSettings) ?>;
    if (loadedSettings) {
        const algorithm = loadedSettings.algorithm;
        const graph = JSON.parse(loadedSettings.graph);
        document.getElementById('algorithm').value = algorithm;
        currentGraph = graph;
        drawGraph(currentGraph);
    }

    drawGraph(currentGraph); // Rysuj początkowy graf

    // Zaktualizuj dostępne wierzchołki w formularzu
    updateStartNodeOptions();

    // Dodaj nasłuchiwanie na kliknięcie przycisku uruchomienia algorytmu
    document.getElementById("runAlgorithm").addEventListener("click", () => {
        const algorithmKey = document.getElementById("algorithm").value;
        const startNode = document.getElementById("startNode").value;
        if (startNode) {
            runAlgorithm(algorithmKey, parseInt(startNode));  // Upewnij się, że ID jest liczbą
        } else {
            alert("Proszę wybrać wierzchołek startowy!");
        }

    });

    // Dodaj nasłuchiwanie na kliknięcie przycisku resetu
    document.getElementById("resetGraph").addEventListener("click", () => {
        resetGraph();
    });

    // Dodaj nasłuchiwanie na kliknięcia miniatur grafów
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const graphKey = thumbnail.getAttribute('data-graph');
            loadGraph(graphKey);
        });
    });

    // Rysuj miniatury grafów
    drawThumbnail(graph1, 'thumbnail1');
    drawThumbnail(graph2, 'thumbnail2');
    drawThumbnail(graph3, 'thumbnail3');
    drawThumbnail(graph4, 'thumbnail4');
    drawThumbnail(graph5, 'thumbnail5');

    // Przekaż dane grafu do ukrytego pola formularza przed wysłaniema
    document.getElementById('saveSettingsForm').addEventListener('submit', () => {
        document.getElementById('graph').value = JSON.stringify(currentGraph);
        document.getElementById('graphName').value = currentGraphName;
    });
});
</script>
</body>
</html>
