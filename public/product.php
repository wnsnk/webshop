<?php

session_start();
$connection = include('../src/database.php');
// header('Content-Type: application/json');

$productId = $_GET['product'];
$sql = "SELECT * FROM products WHERE id = '$productId'";
error_log($sql);
$result = mysqli_query($connection, $sql);
if (mysqli_num_rows($result) > 0) {
    $products = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }
    $product = $products[0];
    $name = $product['product_name'];
    $description = $product['product_description'];
    $imgUrl = $product['img_url'];
    $sizes = json_decode($product['sizeAmount']);
    $price = $product['product_price'];
} else {
    echo 'ERROR 404: page does not exist';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $name ?></title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">
    <?php include('../src/templates/header.php') ?>
    <div class="container">
        <div class="card" style="width: 50vw;">
            <?php
            echo "<img src=$imgUrl class='card-img-top'>";
            echo "<div class='card-body'>";
            echo "<h1 class='card-title'> $name </h1>";
            echo "<h2> €$price </h2>";
            echo "<p class='card-text'> $description </p>";
            echo "<button class='btn btn-primary'>Voeg toe aan winkelwagen</a>";
            echo "</div>";


            ?>
        </div>
    </div>

</body>

</html>
<?php
mysqli_close($connection);
