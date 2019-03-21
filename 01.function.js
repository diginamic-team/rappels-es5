console.log("01 - Fonctions");

let nombre1 = 10;
let nombre2 = 20;


 function additionner(nb1, nb2) {
    return nb1 + nb2;
}
let resultat1 = additionner(nombre1, nombre2);
let somme = additionner;
console.log(resultat1);

let resultat2 = somme(nombre1,nombre2);
console.log(resultat2);

let multiplication = function multiple(nb1, nb2){
    return nb1*nb2;
}

let resultat3 = multiplication(nombre1 , nombre2) ;

console.log(resultat3);


let afficherOperation = function(nomOperation,operation, nbr1,nbr2){
console.log(nomOperation +'('+nbr1+','+nbr2+')=' +operation(nbr1,nbr2));
}

afficherOperation(somme.name,somme,20,40);

afficherOperation('multiplication',multiplication,10,20);
afficherOperation('soustraction', function(nb1, nb2){ return nb1-nb2}, 15, 5);


