<?php
   echo "bilangan prima dari 1-50 adalah : <br>";
   for($a=1; $a<=50; $a++){
       $n=0;
       for($b=1; $b<=$a; $b++){
           if($a % $b == 0){
               $n++;
           }
       }
       if($n == 2){
           echo $a."<br>";
       }
   }
?>