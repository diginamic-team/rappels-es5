/* FONCTION CONSTRUCTEUR */

function Personne (nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + ' '+ this.prenom + ' ' + this.pseudo; 
    }
}

Personne.prototype.affichePersonne = function(){
    console.log (this.getNomComplet());
}

var personne1 = new Personne ("Jules", "LEMAIRE", "Jules77");
var personne2 = new Personne ("Paul", "LEMAIRE", "Paul44");

personne1.affichePersonne();
personne2.affichePersonne();

/* AJOUTER UNE PROPRIETE A PERSONNE */

personne1.age = "25 ans";
personne2.age = "32 ans";

Personne.prototype.affichePersonneAvecAge = function(){
    console.log ( this.nom + ' '+ this.prenom + ' ' + this.pseudo + ' '+this.age);
}

personne1.affichePersonneAvecAge();
personne2.affichePersonneAvecAge();

/* AJOUTER UNE METHODE A PERSONNE */

Personne.prototype.getInitiales = function(){
    console.log ( this.nom.charAt(0) + ' ' + this.nom + ' '+ this.prenom + ' ' + this.pseudo + ' '+this.age);
}

personne1.getInitiales();
personne2.getInitiales();

/* OBJET SANS FONCTION CONSTRUCTEUR */

var robert ={ 
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo :  "robert77",
    getNomComplet : function() {
        return this.nom + ' '+ this.prenom + ' ' + this.pseudo;
    }
};

console.log(robert.getNomComplet());

/* HERITAGE VIA UNE FONCTION CONSTRUCTEUR */

function Client (numeroClient, nom,prenom,pseudo){
    this.numeroClient = numeroClient;
    Personne.call(this,nom,prenom,pseudo);
    getInfos = function (){
        return this.numeroClient + " " + this.nom + " " + this.prenom; 
    }
}

Client.prototype.affichePersonne = function(){
    console.log (this.getInfos());
}

var steve = new Personne ("A01","Steve", "LUCAS", "steve44");
    steve.affichePersonne();