<?php

    $result = array();


    function getItems($pdo) {
        $q = "SELECT ID, title, image FROM tbl_favourite_things";

        $q = $pdo->query($q);

        while($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
            $items[] = $row;
        }

        echo (json_encode($items));
    }

    function getItem($pdo, $id) {
        $q = "SELECT * FROM tbl_favourite_things WHERE id=" . $id;

        $q = $pdo->query($q);

        while($row = $q->fetchAll(PDO::FETCH_ASSOC)) {
            $item[] = $row;
        }

        echo (json_encode($item));
    }