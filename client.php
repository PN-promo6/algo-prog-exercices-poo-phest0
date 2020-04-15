<?php

class Client {
  private $name;
  private $account_number;

  function __construct($name, $account_number) {
    $this->name = $name;
    $this->account_number = $account_number;
  }

  public function getAccountNumber() {
    return $this->account_number;
  }

  public function setName($name) {
    $this->name = $name;
  }
  public function getName() {
    return $this->name;
  }
}

$john_cena = new Client("Cena", 48484778988);
echo ($john_cena->getAccountNumber());
$john_cena->setName("Nicolas");
echo ($john_cena->getName());
?>
