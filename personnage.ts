class Perso {
  name: string;


  constructor(name: string){
    this.name = name;

  }

}


let max = new Perso("max");
let jack = new Perso("jack");
console.log(max.name);

class Livre {
  title: string;
  price: number;

  constructor(title: string, price: number){
    this.title = title;
    this.price = price;
  }
}
let harryPotter: Livre = new Livre("harry Potter", 12);

console.log(harryPotter.title, harryPotter.price);

class Meuble {
  editeur: string;
  designer_name: string;
  year: number;

  constructor(editeur:string, designer_name: string, year: number){
    this.editeur = editeur;
    this.designer_name = designer_name;
    this.year = year;
  }
}
let chaise_wassily: Meuble = new Meuble("Knoll", "Marcel Breuer", 1925);

chaise_wassily.year = 1926;
console.log(chaise_wassily);

class Studiant {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  presentation(){
    console.log("Hello my name is " + this.name + " i am " + this.age +".");
  }
}
let jp: Studiant = new Studiant("Jean-Philippe", 29);
jp.presentation();
