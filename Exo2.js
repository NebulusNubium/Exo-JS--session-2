function spinalCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[_\s]+/g, "-")
      .toLowerCase();                       
  }

console.log(spinalCase("Bonjour Le Monde"));
console.log(spinalCase("grand_Gaillard"));
console.log(spinalCase("Petit coeurEn_Sucre"));
console.log(spinalCase("monSuperTexte"));