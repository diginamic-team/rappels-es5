
var lg = console.log;

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom +' '+ this.prenom +' '+  this.pseudo;      
    }
    this.getInitiales = function (){
        return prenom.charAt(0) + ' ' +  nom.charAt(0);    
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul  = new Personne('LEMAIRE', 'Paul', 'paul44');

function afficherPersonne(Personne){
    lg(Personne.nom);
    lg(Personne.prenom);
    lg(Personne.pseudo);
    lg(Personne.getNomComplet());
}

afficherPersonne(jules)
afficherPersonne(paul)

// Modifier un objet

jules.pseudo='jules44';

lg(jules.getNomComplet());


// Ajouter une propriété à Personne

lg(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
lg(jules.age);
jules.age = 30;
lg(jules.age);


// Ajouter une méthode à Personne

lg(jules.getInitiales());
//Objet sans fonction constructeur

var robert ={
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function (){
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;  
    }
}

afficherPersonne(robert);