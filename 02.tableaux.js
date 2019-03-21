var villes = ['nantes','paris','saint-nazaire', 'angers','le mans'];

//forEach()
villes.forEach(function(element) {
    console.log(element);
  });


  //every()
 var lettreADansToutesLesVilles =  villes.every(element => element.includes('a'));
  console.log("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles);

  //some()

  var auMoinsUneVilleAvecUnTiret = villes.some(element => element.includes('-'))
  console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

  // filter()
  var villesSansTiretSansEspace = villes.filter(element => !element.includes('-') && !element.includes(' '))

  console.log("villesSansTiretSansEspace = " + villesSansTiretSansEspace);


  // Chainer les Fonctions
  var villesMajusculeSeTerminantParS = villes.filter(element => element[element.length-1] == 's').map(element => element.toUpperCase());
  console.log("villesMajusculeSeTerminantParS = " + villesMajusculeSeTerminantParS);