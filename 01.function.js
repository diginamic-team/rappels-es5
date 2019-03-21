//TP #1 - Rappels JavaScript

//Partie 1 - Les fonctions
console.log("01 - Fonctions");

//Définition d'une fonction
let nb1 = 10;
let nb2 = 20;

function add(nb1,nb2) {
    return nb1+nb2;
}

let resultat1 = add(nb1,nb2);
console.log(resultat1);

//Variable de type fonction
let somme = add;
somme(nb1,nb2);
let resultat2 = somme(nb1,nb2);
console.log(resultat2);

let multiplication = function multi(nombre1,nombre2) {
    return nombre1*nombre2;
}
let resultat3 = multiplication(nb1,nb2);
console.log(resultat3);

//Fonction comme élément du 1er ordre
let afficherOperation = function (nomOperation,operation,nb1,nb2){
console.log(nomOperation + '('+ nb1 + ',' + nb2 + ') = '+ operation(nb1,nb2));
}

afficherOperation('Somme',somme, 20,40);

afficherOperation('Multiplication',multiplication,10,20);

afficherOperation('Soustraction',function(nb1,nb2){return nb1-nb2}, 15,5);


