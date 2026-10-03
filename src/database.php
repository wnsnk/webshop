<?php

$env = parse_ini_file('../.env');


$db_server = 'localhost';
$db_user = $env['MARIADB_USERNAME'];

$db_password = $env['MARIADB_PASSWORD'];
error_log($db_password);
$db_name = 'webshopDB';
try {
    $connection = mysqli_connect($db_server, $db_user, $db_password, $db_name);
} catch (mysqli_sql_exception) {
    echo 'could not connect to database!';
}
