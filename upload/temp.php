<?php
  print_r($_FILES);
  $filename=$_FILES['img']['name'];
  $type=$_FILES['img']['type'];
  $tmp_name=$_FILES['img']['tmp_name'];
  $size=$_FILES['img']['size'];
  $error=$_FILES['img']['error'];
  move_uploaded_file($tmp_name, "img/".$filename);
?>
