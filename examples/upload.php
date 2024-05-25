<?php
header('Content-Type: application/json; charset=utf-8');

$data = $_GET;
$data['upload_size'] = strlen(file_get_contents('php://input'));

echo json_encode($data);

// var_dump($_GET);
// var_dump($_POST);