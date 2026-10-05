<?php

include('../../src/database.php');
// header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);


if ($method == 'POST') {
    $email = $input['email'];
    $password = $input['password'];
    // TODO HASH PASSWORD
    $postcode = $input['postcode'];
    $houseNumber = $input['house_number'];
    $streetName = $input['street_name'];
    $city = $input['city'];


    $sql = "INSERT INTO users(email_address, password_, postcode, house_number, street_name, city) 
    VALUES ('$email', '$password', '$postcode', '$houseNumber', '$streetName', '$city')";

    mysqli_query($connection, $sql);
    // TODO CHECK FOR SUCCES

    mysqli_close($connection);
}
