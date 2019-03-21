console.log("01 - Fonctions");

nombre1 = 10;
nombre2 = 20;

function additionner (n1, n2){
    return n1 + n2;
}
var somme = additionner;

resultat2 = somme(nombre1, nombre2);

console.log(resultat2);

function multiplication(n1, n2){
    return n1 * n2;
}


resultat3 = multiplication(nombre1, nombre2);

console.log(resultat3);

nomOperation = new String;
operation = new Function;
nb1 = 10;
nb2 = 20;

//définition de la méthode d'affichage
function afficherOperation(nomOpe, Fonction, nombre01, nombre02){
    return console.log(nomOpe + '(' + nombre01 + ',' + nombre02 + ')' + " = " + Fonction(nombre01, nombre02) );
}


afficherOperation("Somme", additionner, nb1, nb2);

afficherOperation("Multiplication",multiplication, nb1, nb2)

//Fonction anonyme Soustraction
afficherOperation("Sousstraction",function (n1, n2){ return n1 - n2}, nb1, nb2)