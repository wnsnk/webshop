<?php

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

    $user_id = $input['customerId'];

    $cart = $input['cart'];
    foreach ($cart as $item) {
    }
    $cartEncoded = json_encode($cart);
    $totalAmount = $input['totalAmount'];
    // TODO CHECK IF TOTAL AMOUNT IS CORRECT IN PHP?
    $shippingCosts = $input['shippingCosts'];
    $paymentMethod = $input['paymentMethod'];

    $sql = "INSERT INTO orders(customer_id, items, total_amount, shipping_costs, payment_method) 
    VALUES ($user_id, '$cartEncoded', $totalAmount, $shippingCosts, '$paymentMethod')";
    error_log($sql);
    mysqli_query($connection, $sql);

    foreach ($cart as $item) {
        $item = json_decode($item, true);
        $productId = $item['id'];
        $size = $item['size'];
        $amount = $item['amount'];

        // UPDATE PRODUCTS TABLE
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
                    $sizeAmount[$size] -= $amount;
                    $newSizeAmountJSON = json_encode($sizeAmount);
                    $sqlQuery = "UPDATE `products` SET `size_amount` = '$newSizeAmountJSON' WHERE `products`.`id` = $productId";
                    mysqli_query($connection, $sqlQuery);
                    error_log($sqlQuery);
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

    echo json_encode(['succes' => true]);


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
