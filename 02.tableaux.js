var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(element => {
    console.log(element);
});

function contientA(element){
  return element.includes("a");
}

console.log("lettreADansToutesLesVilles = "+villes.every(contientA));

function contientTiret(element){
    return element.includes("-");
}

console.log("auMoinsUneVilleAvecUnTiret = "+villes.some(contientTiret));

function sansTiretSansEspace(element){
    if(!element.includes("-") && !element.includes(" ")){
        return element;
    }
}

console.log("villesSansTiretSansEspace = "+villes.filter(sansTiretSansEspace));

function derniereLettreS(element){
    if(element.endsWith("s")){
        return element.toUpperCase();
    }
}
var lg = console.log;

var testVille =villes
    .filter(function(el) {
        return el.endsWith('s');
    })
    .map(function(el) {
        return el.toUpperCase();
    });

lg(testVille);