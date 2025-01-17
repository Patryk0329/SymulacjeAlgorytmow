<?php
require_once '../includes/session.php';

session_destroy();
setFlashMessage('success', 'Wylogowano pomyślnie.');
header('Location: ../index.php');
exit;
