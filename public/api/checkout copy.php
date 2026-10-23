<?php

use function PHPSTORM_META\type;

session_start();
$connection = include('../../src/database.php');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if ($method === 'POST') {
    if (!$_SESSION['logged_in'] === true) {
        echo json_encode(['succes' => false, 'reason' => 'Not logged in']);
        return;
    }

    // echo json_encode(['succes' => true, 'reason' => ' logged in']);

    $cart = $input['cart'];
    foreach ($cart as $item) {
        $item = json_decode($item, true);
        $productId = $item['id'];
        $size = $item['size'];
        $amount = $item['amount'];

        $sql = "SELECT * FROM products WHERE id = $productId";
        $result = mysqli_query($connection, $sql);
        // CHECK IF ID EXISTS
        if (mysqli_num_rows($result) > 0) {
            $products = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $products[] = $row;
            }
            $product = $products[0];
            $sizeAmount = json_decode($product['size_amount'], true);
            // CHECK IF SIZE EXISTS FOR ITEM
            if (array_key_exists($size, $sizeAmount)) {
                // CHECK IF WANTED AMOUNT <= DB AMOUNT 
                if ($amount <= $sizeAmount[$size]) {
                    error_log($size);
                    error_log($sizeAmount[$size]);
                    $sizeAmount[$size] -= $amount;
                    error_log($sizeAmount[$size]);
                    error_log(json_encode($sizeAmount));
                    // TODO: AT WHAT MOMENT DO I UPDATE THE DATABASE? 
                    // IF I DO IT HERE AND ONE OF THE ITEMS IS NOT IN STOCK THE DATABASE WILL HAVE UPDATED BUT THE ORDER SHOULD FAIL
                    // - MAYBE CREATE AN ARRAY WITH SQL QUERY'S? AND IF EVERYTHING IS IN STOCK LOOP THROUGH THE SQL QUERY ARRAY? 
                    // - MAYBE CREATE ANOTHER API ENDPOINT TO CHECK IF EVERYTHING IS IN STOCK AND ONLY THEN GO TO THIS ENDPOINT?
                } else {
                    echo json_encode(['succes' => false, 'reason' => "$productId at size $size has not enough in stock"]);
                    return;
                }
            } else {
                echo json_encode(['succes' => false, 'reason' => 'Size does not exist']);
                return;
            }
        }
    }


    // $sql = "INSERT INTO products(product_name, product_description, img_url, size_amount, product_price) 
    //         VALUES ('$name', '$description', '$imgUrl', '$sizeAmount', $price)";
    // 
    // if ($query) {
    //     echo json_encode(['succes' => true]);
    // } else {
    //     echo json_encode(['succes' => false]);
    //     // response status 500?
    // }

    mysqli_close($connection);
}
