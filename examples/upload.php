<?php
header('Content-Type: application/json; charset=utf-8');

$fileName = filter_input(INPUT_GET, 'filename');
$pi = pathinfo($fileName);


move_uploaded_file($_FILES['file']['tmp_name'], '/var/www/_pad/dom-helpers/examples/uploads/image.'.$pi['extension']);



// $fileContent = file_get_contents('php://input');

// $data = $_GET;
// $data['upload_size'] = strlen($fileContent);

// file_put_contents('/var/www/_pad/dom-helpers/examples/uploads/image.'.$pi['extension'], $fileContent);





echo json_encode($data);

// var_dump($_GET);
// var_dump($_POST);