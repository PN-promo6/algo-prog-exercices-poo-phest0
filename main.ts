// Exercice 5 à réaliser en TypeScript, PHP et Java
//
// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.
class Concert_ticket {
  name_user: string;
  surname: string;
  place_number: string;
  artist_name: string;
  date: string;

  constructor(name_user: string, place_number: string, artist_name: string, date: string, surname?: string){
    this.name_user = name_user,
    this.place_number = place_number,
    this.artist_name = artist_name,
    this.date = date,
    this.surname = surname
  }

  concert_detail(): string {
    let detail: string;
    if(this.surname){
      detail =  `
      <p>Nom de l'utilisateur : ${ this.name_user } ${ this.surname }</p>
      <p>Numéro de place : ${ this.place_number }</p>
      <p>Nom de l'artiste : ${ this.artist_name }</p>
      <p>Date du concert : ${ this.date } </p>`;
    } else {
      detail = `
      <p>Nom de l'utilisateur : ${ this.name_user }</p>
      <p>Numéro de place : ${ this.place_number }</p>
      <p>Nom de l'artiste : ${ this.artist_name }</p>
      <p>Date du concert : ${ this.date } </p>`;
    }
    return detail;
  }

}
let concert_ticket01 = new Concert_ticket("JP", "01", "Celine Dion", "15 Decembre 2020");
let concert_ticket02 = new Concert_ticket("Madina", "02", "Celine Dion", "15 Decembre 2020", "Bena");
console.log(concert_ticket01.concert_detail());
console.log(concert_ticket02.concert_detail());
