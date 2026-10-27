<?php session_start();
if (!$_SESSION['logged_in']) {
    header('Location: /log-in.php');
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Afrekenen</title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">
    <?php include('../src/templates/header.php') ?>
    <div class="container">
        <h1>Controleer gegevens</h1>
        <div class="row">
            <div id="shippingInfo" class="col border rounded">
                <h2>Adresgegevens</h2>
                <h3>Emailadres:</h3>
                <p id="email">EMAIL</p>
                <h3>Adres</h3>
                <p id="streetNameWithNum">straat 1</p>
                <p id="postcodeAndCity">1234AB AMSTERDAM</p>
            </div>
            <div id="cart" class="col border rounded">
                <h2>Winkelwagen</h2>
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
                    <tfoot>
                        <tr>
                            <th scope="col">Totaal:</th>
                            <th scope="col" id="totalDiffId"></th>
                            <th scope="col"></th>
                            <th scope="col" id="totalAmount"></th>
                            <th scope="col" id="totalPrice"></th>
                            <th scope="col"></th>

                        </tr>
                        <tr>
                            <th scope="col">Verzendkosten:</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" id="shippingCost"></th>
                            <th scope="col"></th>

                        </tr>
                    </tfoot>
                </table>
            </div>
            <script type="module" src="javascript/cart.js"></script>
        </div>
        <br>
        <div class="row">
            <div class="col border rounded">
                <h2>Selecteer betaalmethode</h2>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod1" value="option1" checked>
                    <label class="form-check-label" for="paymentMethod1">
                        Mydeal
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod2" value="option2">
                    <label class="form-check-label" for="paymentMethod2">
                        PalPay
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod3" value="option3">
                    <label class="form-check-label" for="paymentMethod3">
                        Klorno
                    </label>
                </div>

            </div>


        </div>
        <br>
        <div class="row">
            <div class="col">
                <h2>Totaal te betalen:</h2>
                <h3 id="totalWithShipping"></h3>
            </div>
            <div class="col d-flex justify-content-end">
                <button class="btn btn-danger btn-lg">Afrekenen</button>
            </div>
        </div>
    </div>

    <script src="javascript/checkout.js"></script>
</body>

</html>