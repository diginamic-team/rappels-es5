//Partie 2 - Les tableaux

let villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

//forEach()
villes.forEach(function(element){
    console.log(element);
})

//every()
console.log('lettreADansToutesLesVilles' + ' = ' + villes.every(e => e.includes('a')));

//some()
console.log('auMoinsUneVilleAvecUnTiret ' + ' = ' + villes.some(e => e.includes('-')));

//filter()
console.log('villesSansTiretSansEspace' + '=' + villes.filter(e => !e.includes('-',' ')));

//Chainer les Fonctions
console.log('villesMajusculeSeTerminantParS' + ' = '+ villes.filter(e => e.endsWith('s')).map(e => e.toUpperCase()));
