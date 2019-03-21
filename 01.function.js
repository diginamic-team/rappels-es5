
/* DEFINITION D'UNE FONCTION */
    /* ADDITION */
var nombre1 = 10;
var nombre2 = 20;

function additionner (nbr1,nbr2){
    return nbr1 + nbr2;
}

var resultat1 = additionner (nombre1,nombre2);

console.log("Résultat1 = ",resultat1);

/* VARIABLE DE TYPE FONCTION */
    /* SOMME */
var somme = additionner;
var resultat2 = somme(nombre1,nombre2);

console.log("Résultat2 = ",resultat2);

    /* MULTIPLICATION */

var multiplication = function multiplication (nbr1,nbr2){
    return nbr1 * nbr2;
}

var resultat3 = multiplication (nombre1,nombre2);

console.log ("Résultat3 = ",resultat3);


/* FONCTION COMME ELEMENT DU 1er ORDRE */
    /* ADDITION */
var afficherOperation = function(nomOperation, operation, nbr1, nbr2){

    return nomOperation +"("+nbr1+ "," +nbr2+") = "+ operation(nbr1,nbr2);
}

nombre1 = 20;
nombre2 = 40;
nomOperation = "Somme";

resultat4 = afficherOperation(nomOperation, somme, nombre1, nombre2);

console.log (resultat4);

    /* MULTIPLICATION */

    function afficherOperation(nomOperation, operation, nbr1, nbr2){

        return nomOperation +"("+nbr1+ "," +nbr2+ ") = " + operation(nbr1 * nbr2);
    }

    nombre1 = 10;
    nombre2 = 20;
    nomOperation = "Multiplication"

    resultat5 = afficherOperation (nomOperation, multiplication, nombre1, nombre2)
    console.log(resultat5);

    /* SOUSTRATION */

    function afficherOperation (nomOperation, operation, nbr1, nbr2){
        return nomOperation +"("+nbr1+ "," +nbr2+ ") = " + operation(nbr1 - nbr2);
    }

    nombre1 = 15;
    nombre2 = 5;
    nomOperation = "Soustration";

    resultat6 = afficherOperation (nomOperation, function(n1,n2){ return n1-n2}, nombre1, nombre2)
    console.log(resultat6);
