<?php

class Meuble {
  Public $designer_name;
  Public $editor;
  Public $year;

  function __construct($designer_name, $editor, $year){
    $this->designer_name = $designer_name;
    $this->editor = $editor;
    $this->year = $year;
  }
}

$chaise_wassily = new Meuble("Marcel Breuer", "Knoll", 1925);
print_r($chaise_wassily);

$chaise_wassily->year = 1926;

print_r($chaise_wassily);

class Eleve {
  Public $name;
  Public $age;

  function __construct($name, $age){
    $this->name = $name;
    $this->age = $age;
  }

  Public function presentation(){
    echo("Hello my name is ". $this->name . " i am " . $this->age . ".");
  }
}
$jp = new Eleve("Jean-Philippe", 29);
$jp->presentation();

?>
