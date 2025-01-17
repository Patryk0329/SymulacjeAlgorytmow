<?php
require_once '../includes/session.php';
require_once '../includes/db.php';

if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    setFlashMessage('error', 'Musisz być zalogowany, aby zapisać ustawienia.');
    header('Location: ../index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $algorithm = $_POST['algorithm'] ?? '';
    $graph = $_POST['graph'] ?? '';
    $graphName = $_POST['graphName'] ?? '';

    if ($algorithm && $graph && $graphName) {
        // Usuń istniejące ustawienia użytkownika
        $stmt = $db->prepare("
            DELETE FROM settings
            WHERE user_id = (SELECT id FROM users WHERE username = :username)
        ");
        $stmt->execute([':username' => $_SESSION['username']]);

        // Zapisz nowe ustawienia
        $stmt = $db->prepare("
            INSERT INTO settings (user_id, algorithm, graph, graph_name)
            VALUES ((SELECT id FROM users WHERE username = :username), :algorithm, :graph, :graph_name)
        ");
        $stmt->execute([
            ':username' => $_SESSION['username'],
            ':algorithm' => $algorithm,
            ':graph' => $graph,
            ':graph_name' => $graphName
        ]);

        // Zapisz ustawienia w sesji
        $_SESSION['loaded_settings'] = [
            'algorithm' => $algorithm,
            'graph' => $graph,
            'graph_name' => $graphName
        ];
        setFlashMessage('success', 'Ustawienia zapisane pomyślnie.');
    } else {
        setFlashMessage('error', 'Wypełnij wszystkie pola.');
    }
    header('Location: ../index.php');
    exit;
}
?>