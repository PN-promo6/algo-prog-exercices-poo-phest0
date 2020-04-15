class Personnage2 {
  name: string;
  surname: string;
  birthday: string;

  constructor(name: string, surname: string, birthday?: string){
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

  dispay_complete_name(){
    console.log(this.name + " " + this.surname);
  }
}
let julien: Personnage2 = new Personnage2("Julien", "Cazard", "31/10/90");
let lea: Personnage2 = new Personnage2("Lea", "Castel");

julien.dispay_complete_name();
lea.dispay_complete_name();
