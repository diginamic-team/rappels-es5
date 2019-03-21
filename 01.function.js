console.log("01 - Fonctions");




var nombre1 = 10;
var nombre2 = 20;



function additionner() {
	return parseInt(nombre1) + parseInt(nombre2);
	// console.log(sum);
	
}

var resultat1 = additionner();

console.log("resultat1 = " + resultat1);


function somme(nombre1, nombre2) {
	return additionner();
}

var resultat2 = somme();

console.log("resultat2 = " + resultat2);


function multiplication() {
	return Number(nombre1) * Number(nombre2);
}

// var multiplication = multplication();

var resultat3 = multiplication();

console.log("resultat3 = " + Number(resultat3));

var nomOperation, operation, result; 

function afficherOperation(nomOperation, operation, nb1, nb2, result) {
	nb1 = 20;
	nb2 = 40;
	nomOperation = "Somme";
	result = Number(nb1) + Number(nb2);
	return "<" + nomOperation + ">(<" + Number(nb1) + ">, <" + Number(nb2) + ">) = <" + Number(result) + ">";
}


console.log(afficherOperation());



var Somme;

var newnbr1 = 2
var newnbr2 = 3;


function Multiplication(newnbr1, newnbr2) {
	

	
	resultatMultiplication = parseInt(newnbr1) * parseInt(newnbr2);
	
	return "<" + Multiplication + ">(<" + newnbr1 + ">, <" + newnbr2 + ">) = <" + resultMultiplication + ">";
	
}


console.log(Multiplication());