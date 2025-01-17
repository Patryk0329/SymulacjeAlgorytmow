<?php
require_once '../includes/session.php';
require_once '../includes/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username && $password) {
        $stmt = $db->prepare("SELECT COUNT(*) FROM users WHERE username = :username");
        $stmt->execute([':username' => $username]);
        if ($stmt->fetchColumn() > 0) {
            setFlashMessage('error', 'Nazwa użytkownika jest już zajęta.');
            header('Location: register.php');
            exit;
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
            $stmt->execute([':username' => $username, ':password' => $hashedPassword]);
            setFlashMessage('success', 'Rejestracja zakończona sukcesem. Możesz się zalogować.');
            header('Location: login.php');
            exit;
        }
    } else {
        setFlashMessage('error', 'Wypełnij wszystkie pola.');
        header('Location: register.php');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Rejestracja</title>
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
<h1>Rejestracja</h1>
<form method="post">
    <label for="username">Nazwa użytkownika:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Hasło:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Zarejestruj się</button>
    <a href="login.php">Zaloguj się</a>
    <a href="../index.php">Powrót</a>
</form>
</body>
</html>