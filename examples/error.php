<?php
//header('Content-Type: application/json; charset=utf-8');
http_response_code(500);

echo json_encode([
    'error' => 'there was error'
]);
exit;