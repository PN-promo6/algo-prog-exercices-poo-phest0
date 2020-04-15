<?php

class Client
{
    public $name;
    public $account_number;

    function __construct($name, $account_number)
    {
        $this->name = $name;
        $this->account_number = $account_number;
    }
}

class ClientProfessionel extends Client
{
    public $siretNumber;

    function __construct($name, $account_number, $siretNumber)
    {
        parent::__construct($name, $account_number);
        $this->siretNumber = $siretNumber;
    }
}

$new_client = new Client("vanessa", "13489757659");
echo ($new_client->name . ' ' . $new_client->account_number);
$new_client_pro = new ClientProfessionel("gerard", "13477479575", "2746748575859");
echo (' ' . $new_client_pro->name . ' ' . $new_client_pro->account_number . ' ' . $new_client_pro->siretNumber);
