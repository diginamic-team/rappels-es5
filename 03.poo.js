function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){
       return this.nom + ' '+this.prenom+ ' '+this.pseudo;
    }
    this.getInitiales = function(){
        return this.nom.charAt(0).toUpperCase() + ' ' + this.prenom.charAt(0).toUpperCase() ;
    }
}

let jules = new Personne('LEMAIRE', 'Jules','jules77');
let paul = new Personne('LEMAIRE', 'Paul', 'paul44');

function affichePersonne(personne){
    console.log(personne.getNomComplet());
}

affichePersonne(jules);
affichePersonne(paul); 

jules.pseudo = 'jules44';
affichePersonne(jules);

console.log(jules.age);
Personne.prototype.age = 'non renseigne';
console.log(jules.age);
console.log(jules.getInitiales());