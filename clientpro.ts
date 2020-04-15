class Client {
    public name: string;
    public accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientProfessionnel extends Client {
    siretNumber: string = "1234556";

    constructor(name: string, accountNumber: number, siretNumber: string) {
        super(name, accountNumber);
        this.siretNumber = siretNumber;
    }
}

let new_client: Client = new Client("david", 123459877);
console.log(new_client.name, new_client.accountNumber);

let steven_gerard: ClientProfessionnel = new ClientProfessionnel("steven", 1234565, "09875799389");
console.log(steven_gerard.name, steven_gerard.accountNumber, steven_gerard.siretNumber);