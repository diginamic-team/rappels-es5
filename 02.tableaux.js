var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(ville){
    console.log(ville);
});

function lettreADansToutesLesVilles(ville){
    return ville.includes('a');
} 

function auMoinsUneVilleAvecUnTiret (ville){
    return ville.includes('-');
}
function auMoinsUneVilleAvecUnEspace (ville){
    return ville.includes(' ');
}


console.log(villes.every(lettreADansToutesLesVilles));
console.log(villes.some(auMoinsUneVilleAvecUnTiret));

villeSansTiretEspace = villes.filter(ville => !ville.includes(' ' || '-'))

console.log(villeSansTiretEspace);

console.log(villes.filter(ville => ville.endsWith('s')).map(ville => ville.toUpperCase()));