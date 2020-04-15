class Playground {
    public static void main(String[] args) {
        Client newClient = new Client("vanessa", "0984675859");
        System.out.println(newClient.name + ' ' + newClient.accountNumber);
        ClientPro newClientPro = new ClientPro("benoit", "09848595008", "09577585400948");
        System.out.println(newClientPro.name + ' ' + newClientPro.accountNumber + ' ' + newClientPro.siretNumber);
    }
}

class Client {

    public String name;
    public String accountNumber;

    Client(String name, String accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    public String siretNumber;

    ClientPro(String name, String accountNumber, String siretNumber) {
        super(name, accountNumber);
        this.siretNumber = siretNumber;
    }
}