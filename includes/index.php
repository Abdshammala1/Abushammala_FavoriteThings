<?php
    include("connect.php");
    include("functions.php");



    if(isset($_GET["id"])) {
        $id = $_GET["id"];
        $item = getItem($pdo, $id);

        return $item;
    } else {
        $items = getItems($pdo);

        return $items;
    }