var jules = {
  nom: 'LEMAIRE',
  prenom : 'Jules',
  pseudo : 'jules77',
}

var paul = {
  nom: 'LEMAIRE',
  prenom : 'Paul',
  pseudo : 'paul44',
}

var robert = {
  prenom : 'Robert',
  nom: 'LEPREFET',
  pseudo : 'robert77',
}

function getNomComplet() {
	return jules.nom + " " + jules.prenom;
}

function getNomComplet2() {
	return robert.nom + " " + robert.prenom + " " + robert.pseudo;
}

function afficherPersonne() {
	return "Nom : " + paul.nom + "\nPrenom : " + paul.prenom + "\nPseudo : " + paul.pseudo;
}

function afficherPersonne2() {
	return "Nom : " + robert.nom + "\nPrenom : " + robert.prenom + "\nPseudo : " + robert.pseudo;
}

console.log("Nom : " + jules.nom);
console.log("Prenom : " + jules.prenom);
console.log("Pseudo : " + jules.pseudo);
console.log("Nom complet : " + getNomComplet());
console.log("Nom complet : " + getNomComplet2());
console.log(afficherPersonne());
console.log(afficherPersonne2());


