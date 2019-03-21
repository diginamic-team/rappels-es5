//Partie 3 - Programmation orientée objet

//Fonction constructeur

function Personne(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom + ' ' + this.prenom + ' '+ this.pseudo;
    }
};

let jules = new Personne('Jules', 'LEMAIRE', 'jules77');
let paul = new Personne('Paul', 'LEMAIRE', 'paul44');

console.log(jules.getNomComplet());
console.log(paul.getNomComplet());

