let villes = ['nantes', 'paris','saint-nazaire','angers','le mans'];

villes.forEach(function(e){
console.log(e);
});

console.log(villes.every(elem => elem.includes('a')));
console.log(villes.some(elem => elem.includes('-')));

let villesSansTiretSansEspace = villes.filter(elem => !elem.includes('-') && !elem.includes(' ' ));

console.log(villesSansTiretSansEspace);

let villesMajusculeSeTerminantParS = villes.filter(elem => elem.charAt(elem.length-1) == 's').map(e=>e.toUpperCase());

console.log(villesMajusculeSeTerminantParS);