/* LES TABLEAUX */

var villes = ["Nantes","Paris","Saint-Nazaire","Angers","Le Mans"];

    /* FOREACH() */

 villes.forEach(function(element){
    console.log(element);
 });

    /* EVERY() */

var lettreADansToutesLesVilles = villes.every(function(el){
    return el.includes('a') || el.includes('A');
})

console.log ("Lettre A dans toutes les villes = ", lettreADansToutesLesVilles);

    /* SOME() */

var auMoinsUneVilleAvecUnTiret = villes.sort(function(el){
    return el.includes('-');
})

console.log ("Au moins une ville avec un tiret = ", auMoinsUneVilleAvecUnTiret);

    /* FILTER() */

var villesSansTiretSansEspace = villes.filter(function(el){
    if( !el.includes(" ") && !el.includes ("-")){
        return true;
    }
    else{
        return false;
    }
})

console.log ("Villes sans tiret et sans espace", villesSansTiretSansEspace)

/* CHAINER LES FONCTIONS */

var villesQuiSeTerminentAvecUnS = villes.filter(function(el){
    return el.endsWith('s');
})

var villesQuiSeTerminentAvecUnS = villes.map(function(el){
    return el.toUpperCase();
})


console.log ("Villes qui se terminent avec un S", villesQuiSeTerminentAvecUnS);
