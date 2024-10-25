<?php
function somar($x, $y){
  return $x +$y;
}
function subtrair ($x, $y){
  return $x - $y;
}
$nome = "Aline";
$num1 = 10;
$num2 = 20;
echo "<h1>Olá" . $nome . "</h1>";
echo $num1 . " + " . $num2 . " = " . somar ($num1, $num2);
echo "<br>";
echo $num1 . " - " . $num2 . " = " . subtrair ($num1, $num2);
?>

