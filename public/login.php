<?php
require_once '../includes/session.php';
require_once '../includes/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username && $password) {
        $stmt = $db->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->execute([':username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['logged_in'] = true;
            $_SESSION['username'] = $username;
            setFlashMessage('success', 'Zalogowano pomyślnie!');
            header('Location: ../index.php');
            exit;
        } else {
            setFlashMessage('error', 'Nieprawidłowa nazwa użytkownika lub hasło.');
            header('Location: login.php');
            exit;
        }
    } else {
        setFlashMessage('error', 'Wypełnij wszystkie pola.');
        header('Location: login.php');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Logowanie</title>
    <link rel="stylesheet" href="css/auth.css">
</head>
<body>
<?php if ($flashMessages = getFlashMessages()): ?>
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
<h1>Logowanie</h1>
<form method="post">
    <label for="username">Nazwa użytkownika:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Hasło:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Zaloguj się</button>
    <a href="register.php">Zarejestruj się</a>
    <a href="index.php">Powrót</a>
</form>
</body>
</html>