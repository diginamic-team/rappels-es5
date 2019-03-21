//Partie 3 - Programmation orientée objet

//Fonction constructeur
function Personne(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.prenom + ' ' + this.nom + ' '+ this.pseudo;
    }
    this.getInitiales = function() {
        return this.prenom.charAt(0) +' '+ this.nom.charAt(0);
    }
};

let jules = new Personne('LEMAIRE', 'Jules', 'jules77');
let paul = new Personne('LEMAIRE', 'Paul', 'paul44');

console.log(jules.nom + jules.prenom + jules.pseudo + jules.getNomComplet());

function afficherPersonne(personne){
    console.log(personne.getNomComplet());
    //console.log(personne.getInitiales());
}

afficherPersonne(paul);

//Modifier un objet
jules.pseudo = 'jules44';
afficherPersonne(jules);

//Ajouter une propriété à Personne
console.log(jules.age);

Personne.prototype.age = 'non renseigné';
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

//Ajouter une méthode à Personne
afficherPersonne(jules);
console.log(jules.getInitiales())

//Héritage via une fonction constructeur

function Client(prenom,nom,pseudo,numeroClient){
   Personne.call(this,prenom, nom, pseudo);
    this.numeroClient = numeroClient;
    this.getNomComplet = function(){
        return this.prenom + ' ' + this.nom + ' '+ this.pseudo;
    }
    this.getInfosClient = function(){
        return this.numeroClient + ' ' + this.nom + ' '+ this.prenom;
    }

};

let steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfosClient());
