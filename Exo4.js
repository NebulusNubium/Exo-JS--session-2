function smallestCommons(arr) {
    // Étape 1 : trier les bornes
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`Intervalle : de ${min} à ${max}`);
  
    // Étape 2 : créer une liste des nombres entre min et max
    const range = [];
    for (let i = min; i <= max; i++) {
      range.push(i);
    }
    console.log("Liste des nombres à traiter :", range);
  
    // Étape 3 : fonction PGCD (Plus Grand Commun Diviseur)
    function gcd(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
  
    // Étape 4 : fonction PPCM (Plus Petit Multiple Commun)
    function lcm(a, b) {
      const result = (a * b) / gcd(a, b);
      console.log(`PPCM de ${a} et ${b} est ${result}`);
      return result;
    }
  
    // Étape 5 : calculer le PPCM de tous les nombres de la liste
    let currentLcm = range[0];
    for (let i = 1; i < range.length; i++) {
      currentLcm = lcm(currentLcm, range[i]);
    }
  
    console.log(`PPCM final de tous les nombres entre ${min} et ${max} est : ${currentLcm}`);
    return currentLcm;
  }
console.log(smallestCommons([1, 3])); // 6
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60 
console.log(smallestCommons([1, 10])); // 2520
