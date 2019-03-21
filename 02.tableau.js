var villes = ["Jérusalem", "Damas", "Nazareth", "Saint-Jean d'Acre", "Medine"];

villes.forEach(function(element) {
  console.log(element);
});

function lettreADansToutesLesVilles(valueA) {
  return valueA = 'a';
}

console.log("lettreADansToutesLesVilles = " + villes.every(lettreADansToutesLesVilles));




var auMoinsUneVilleAvecUnTiret = function(element) {
  return element = '-';
};

console.log("auMoinsUneVilleAvecUnTiret = " + villes.some(auMoinsUneVilleAvecUnTiret));



villes.map(function(x){ 
	
		return x.toUpperCase(); 
	}
)

toUpper = function(x){ 
  return x.toUpperCase();
};



console.log(villes.indexOf('s').map(toUpper));


