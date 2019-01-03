<?php
$con=mysqli_connect("127.0.0.1","root","","db_server");
if(!$con)
{
    die("connection fails".$con->connect_error);
}
