<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "ajirny";

// create connection 
$db = mysqli_connect($servername, 
$username ,
$password ,
$database );

//check connection
if ($db) {
   console.log("connect");
   
} else if ($db->connect_error) {
    die("connection failed:" .$db->connect_error);
    }



?>