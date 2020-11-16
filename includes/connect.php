<?php 


    $user = 'root';

    $pass = '';


    $db_conn = array( 
        'host' => 'localhost',
        'dbname' => 'data',
        'charset' => 'utf8'
    );

    $conn = 'mysql:'.http_build_query($db_conn, '', ';');

    


    try{
        $pdo = new PDO($conn, $user, $pass);
        //echo "it's working!!";
     
    } catch (PDOException $exception){
        echo 'Database Connection Error:'.$exception->getMessage();
        exit();
    }