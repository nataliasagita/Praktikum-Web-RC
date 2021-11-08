<?php
    $M=10;
    $N=5;
    echo "bilangan 1 = $M <br>";
    echo "bilangan 2 = $N <br>";
    echo "<br> Berikut merupakan hasil dari setiap operasi <br>";
    penjumlahan($M, $N);
    pengurangan($M, $N);
    perkalian($M, $N);
    pembagian($M, $N);
    modulus($M, $N);

    function penjumlahan($m, $n){
        $hasil = $m + $n;
        echo "<br> PENJUMLAHAN <br>";
        echo "Operator : + <br>";
        echo"hasil : $hasil <br>";
    }

    function pengurangan($m, $n){
        $hasil = $m - $n;
        echo "<br> PENGURANGAN <br>";
        echo "Operator : - <br>";
        echo"hasil : $hasil <br>";
    }

    function perkalian($m, $n){
        $hasil = $m * $n;
        echo "<br> PERKALIAN <br>";
        echo "Operator : * <br>";
        echo"hasil : $hasil <br>";
    }

    function pembagian($m, $n){
        $hasil = $m / $n;
        echo "<br> PEMBAGIAN <br>";
        echo "Operator : / <br>";
        echo"hasil : $hasil <br>";
    }

    function modulus($m, $n){
        $hasil = $m % $n;
        echo "<br> MODULUS <br>";
        echo "Operator : % <br>";
        echo"hasil : $hasil <br>";
    }
    ?> 