<?php

class Concert_ticket
{
  public $name_user;
  public $surname;
  public $place_number;
  public $artist_name;
  public $date;

  function __construct($name_user, $place_number, $artist_name, $date, $surname = null)
  {
    $this->name_user = $name_user;
    $this->artist_name = $artist_name;
    $this->place_number = $place_number;
    $this->date = $date;
    $this->surname = $surname;
  }

  function concert_detail()
  {
    $detail = '';
    if ($this->surname == null) {
      $detail = '<p>Nom de l\'utilisateur : ' . $this->name_user . '</p>
      <p>Numéro de place : ' . $this->place_number . '</p>
      <p>Nom de l\'artiste : ' . $this->artist_name . '</p>
      <p>Date du concert : ' . $this->date . '</p>';
    } else {
      $detail = '<p>Nom de l\'utilisateur : ' . $this->name_user . ' ' . $this->surname . '</p>
      <p>Numéro de place : ' . $this->place_number . '</p>
      <p>Nom de l\'artiste : ' . $this->artist_name . '</p>
      <p>Date du concert : ' . $this->date . '</p>';
    }

    return $detail;
  }
}

$concert_ticket01 = new Concert_ticket("JP", "01", "Celine Dione", "15 Decembre 2020");
$concert_ticket02 = new Concert_ticket("Madine", "02", "Celine Dion", "15 Decembre 2020", "Bena");

echo ($concert_ticket01->concert_detail());
echo ($concert_ticket02->concert_detail());
