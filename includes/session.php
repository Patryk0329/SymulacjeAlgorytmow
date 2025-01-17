<?php
session_start();

/**
 * Ustawia komunikat flash w sesji.
 */
function setFlashMessage($type, $message) {
    $_SESSION['flash_messages'][$type][] = $message;
}

/**
 * Pobiera komunikaty flash i usuwa je z sesji.
 */
function getFlashMessages() {
    if (isset($_SESSION['flash_messages'])) {
        $messages = $_SESSION['flash_messages'];
        unset($_SESSION['flash_messages']);
        return $messages;
    }
    return [];
}
