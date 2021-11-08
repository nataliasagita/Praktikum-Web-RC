<?php
   echo "data sebelum diurutkan : larine, aduh, qifuat, toda, anevi, samid, kifuat <br>";
   echo "<br> data setelah diurutkan : <br> <br>";
   $nama = array("larine", "aduh", "qifuat", "toda", "anevi", "samid", "kifuat");
   sort($nama);
   for ($j=0; $j<=6; $j++){
       echo $nama[$j]."<br>";
   }
?>