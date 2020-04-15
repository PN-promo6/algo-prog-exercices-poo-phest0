abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    name: string;
    life: number;
    sizeUsed: number;
    inventory: Array<Item>;
    inventoryUsed: number = 0;

    constructor(name: string) {
        this.name = name;
        this.life = 3;
        this.inventory = new Array<Item>();
        this.inventoryUsed = 0;
    }

    addItem(Item: Item): boolean {

        if (this.inventoryUsed + Item.size > 9) {
            console.log("Plus de place dans votre inventaire");
            return false;
        }
        this.inventory.push(Item);
        this.inventoryUsed += Item.size;
        console.log(Item.name + " a été ajouté !");

        return true;
    }
}

let player1: Player = new Player("Mario");
let goldTeleport: Teleporter = new Teleporter("Teleporter doré", 7);
player1.addItem(goldTeleport);
player1.addItem(goldTeleport);
player1.addItem(goldTeleport);
player1.addItem(goldTeleport);
player1.addItem(goldTeleport);