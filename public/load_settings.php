<?php
require_once '../includes/session.php';
require_once '../includes/db.php';

if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    setFlashMessage('error', 'Musisz być zalogowany, aby wczytać ustawienia.');
    header('Location: ../index.php');
    exit;
}

$stmt = $db->prepare("
    SELECT algorithm, graph, graph_name
    FROM settings
    WHERE user_id = (SELECT id FROM users WHERE username = :username)
    LIMIT 1
");
$stmt->execute([':username' => $_SESSION['username']]);
$settings = $stmt->fetch(PDO::FETCH_ASSOC);

if ($settings) {
    $_SESSION['loaded_settings'] = $settings;
    setFlashMessage('success', 'Ustawienia wczytane pomyślnie.');
} else {
    setFlashMessage('error', 'Brak zapisanych ustawień.');
}
header('Location: ../index.php');
exit;
?>