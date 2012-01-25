<?php

$color = array("♠","♥","♣","♦");
$cards = array("2","3","4","5","6","7","8","9","T","J","Q","K","A");

$selCol1 = rand(0, 3);
$selCar1 = rand(0,12);
$selCol2 = rand(0, 3);
$selCar2 = rand(0,12);

header('Content-type: text/html; charset=utf-8');
echo $color[$selCol1].$cards[$selCar1].$color[$selCol2].$cards[$selCar2];

?>
