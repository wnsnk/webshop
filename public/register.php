<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">

    <?php include('../src/templates/header.php') ?>

    <div id="warnings"></div>

    <div class="d-flex align-items-center py-4 ">
        <div class="form-sign-in w-50 m-auto">
            <div data-np-autofill-form-type="login" data-np-watching="1">
                <h1 class=>Create an account!</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" data-np-checked="1" data-np-autofill-field-type="username">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword0" placeholder="Password" data-np-checked="1" data-np-autofill-field-type="password">
                    <label for="floatingPassword0">Password</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword1" placeholder="Password" data-np-checked="1" data-np-autofill-field-type="password">
                    <label for="floatingPassword1">Repeat your password</label>
                </div>
                <br>
                <h2>Address</h2>
                <div class="form-floating">
                    <input type="text" class="form-control" id="postcode" placeholder="Postcode" data-np-checked="1">
                    <label for="postcode">Postcode</label>
                </div>
                <div class="form-floating row">
                    <div class="col col-md-8">
                        <input type="text" class="form-control" id="houseNumber" placeholder="House number" data-np-checked="1">
                    </div>
                    <div class="col col-md-4">
                        <button id="fillAddress" class="btn btn-secondary">Fill in address</button>
                    </div>

                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" id="streetName" placeholder="Street Name" data-np-checked="1">
                    <label for="streetName">Street Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="city" placeholder="City" data-np-checked="1">
                    <label for="city">City</label>
                </div>
                <br>
                <button id="registerBtn" class="btn btn-primary w-100 py-2">Register</button>
            </div>
        </div>
    </div>

    <script type="module" src="javascript/register.js"></script>
</body>

</html>