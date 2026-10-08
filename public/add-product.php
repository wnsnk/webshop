<?php

use function PHPSTORM_META\type;

session_start();
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] && isset($_SESSION['is_admin']) && $_SESSION['is_admin']) {;
} else {
    header('Location: /');
} ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add products</title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">
    <?php include('../src/templates/header.php') ?>
    <div class="container">
        <h1>Nieuw product toevoegen</h1>
        <br>

        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="mb-3">
                <label for="productName" class="form-label">Naam product</label>
                <input type="text" class="form-control" name="productName" id="productName" maxlength="50">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Product Beschrijving</label>
                <textarea class="form-control" name="description" id="description" maxlength="500"></textarea>
            </div>
            <div class="mb-3">
                <label for="imgUrl" class="form-label">Foto URL</label>
                <input type="url" name="imgUrl" class="form-control" id="imgUrl" maxlength="100">
            </div>
            <div class="mb-3">
                <label for="size" class="form-label">Maat</label>
                <input type="text" name="size" class="form-control" id="size" maxlength="5">
            </div>
            <div class="mb-3">
                <label for="amount" class="form-label">Voorraad</label>
                <input type="number" name="amount" class="form-control" id="amount">
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Prijs</label>
                <input type="number" step="0.01" name="price" class="form-control" id="price">
            </div>


            <button type="submit" class="btn btn-primary">Toevoegen</button>
        </form>
    </div>



</body>

</html>

<?php
$connection = include('../src/database.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['productName'];
    $description = $_POST['description'];
    $imgUrl = $_POST['imgUrl'];
    $size = $_POST['size'];
    $amount = $_POST['amount'];
    $price = $_POST['price'];
    error_log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

    error_log($name);
    error_log($description);
    error_log($imgUrl);
    error_log($size);
    error_log($amount);
    error_log(gettype($amount));
    error_log($price);
    // NULL?????



    $sql = "INSERT INTO products(product_name, product_description, img_url, size, amount, product_price) 
            VALUES ('$name', '$description', '$imgUrl', '$size', $amount, $price)";
    $query = mysqli_query($connection, $sql);
    if ($query) {
        echo json_encode(['succes' => true]);
    } else {
        echo json_encode(['succes' => false]);
        // response status 500?
    }

    mysqli_close($connection);
}
