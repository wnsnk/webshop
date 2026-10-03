<?php

$env = parse_ini_file('../.env');


$db_server = 'localhost';
$db_user = $env['MARIADB_USERNAME'];

$db_password = $env['MARIADB_PASSWORD'];
error_log($db_password);
$db_name = 'webshopDB';

$connection = mysqli_connect($db_server, $db_user, $db_password, $db_name);

if ($connection) {
    echo 'connect';
} else {
    echo 'nope';
}
