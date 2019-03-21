var lg = console.log;


function Personne (nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom
    this.pseudo = pseudo;
    this.age = 'NON RENSEIGNE';
    this.getNomComplet = function(){
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo + ' ' + this.age;
    }
}
// création de jule et paul
var jule = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne ('LEMAIRE', 'Paul', 'paul44')

// Log des nom avec l'appel de la méthode
lg(jule.getNomComplet());
lg(paul.getNomComplet());

jule.pseudo = "jules44";

lg(jule.getNomComplet());

jule.age = 30;
lg(jule.getNomComplet());

