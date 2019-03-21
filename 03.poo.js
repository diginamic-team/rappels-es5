function Personne(nom,prenom,pseudo){
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;

  this.getNomComplet = function(){
      alert(this.nom+" "+this.prenom+" "+this.pseudo);
  }

}

function creerPersonne("jules","lemaire"){

}