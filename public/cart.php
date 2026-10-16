<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Winkelwagen</title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">
    <?php include('../src/templates/header.php') ?>
    <div class="container">
        <h1>Winkelwagen</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Artikel</th>
                    <th scope="col">Maat</th>
                    <th scope="col">Hoeveelheid</th>
                    <th scope="col">Prijs</th>
                    <th scope="col">Verwijderen</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

        <button class="btn btn-danger">Afrekenen</button>

    </div>


    <script type="module" src="javascript/cart.js"></script>
</body>

</html>