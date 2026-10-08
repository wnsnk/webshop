<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <?php include('../src/templates/bootstrap.html') ?>
</head>

<body data-bs-theme="dark">

    <?php include('../src/templates/header.html') ?>

    <div id="warnings"></div>

    <div class="d-flex align-items-center py-4 ">
        <div class="form-sign-in w-50 m-auto">
            <div data-np-autofill-form-type="login" data-np-watching="1">
                <h1 class=>Log in!</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" data-np-checked="1" data-np-autofill-field-type="username">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" data-np-checked="1" data-np-autofill-field-type="password">
                    <label for="floatingPassword0">Password</label>
                </div>

                <br>
                <button id="logInBtn" class="btn btn-primary w-100 py-2">Log in</button>
            </div>
        </div>
    </div>

    <script type="module" src="javascript/log_in.js"></script>
</body>

</html>