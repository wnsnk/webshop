<?php session_start(); ?>

<header
    class="d-flex container flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="col-md-3 mb-2 mb-md-0"> <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"> <svg
                class="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlink:href="#bootstrap"></use>
            </svg> </a> </div>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/products.php" class="nav-link px-2">Producten</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">Over ons</a></li>
    </ul>

    <div class="col-md-3 text-end">
        <?php
        if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']) {
            if (isset($_SESSION['is_admin']) && $_SESSION['is_admin']) {
                echo '<a href="/add-product.php" type="button" class="btn btn-primary me-2">Producten toevoegen</a>';
            }
            echo '<a href="/log-out.php" type="button" class="btn btn-outline-primary me-2">Uitloggen</a>';
        } else {
            echo '<a href="/log-in.php" type="button" class="btn btn-outline-primary me-2">Inloggen</a>';
            echo '<a href="/register.php" type="button" class="btn btn-primary">Registreren</a>';
        }
        ?>


    </div>
</header>