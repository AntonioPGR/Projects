<?php


$response = ['status'=>'ok', 'response'=>'olá'];

header("{
   Content-type: 'application/json',
   Accept: 'application/json'
}");
echo json_encode($response);