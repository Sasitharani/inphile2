<?php
header('Content-Type: application/json');

$targetDir = __DIR__ . '/uploads/';
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $originalFileName = basename($_FILES['file']['name']);
        $username = isset($_POST['username']) ? $_POST['username'] : 'unknown_user';
        $timestamp = time();
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION);
        $newFileName = $username . '_' . $timestamp . '.' . $fileExtension;
        $targetFilePath = $targetDir . $newFileName;

        if (move_uploaded_file($fileTmpPath, $targetFilePath)) {
            echo json_encode(['path' => 'uploads/' . $newFileName]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to move uploaded file.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'No file uploaded or there was an upload error.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method.']);
}
?>
