class Client {
  private name: string;
  private accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  getAccountNumber(): number {
    return this.accountNumber;
  }
  setName(name: string): void {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

let john_cena: Client = new Client("Cena", 46765390928783);
console.log(john_cena.getAccountNumber());
john_cena.setName("Théo");
console.log(john_cena.getName());