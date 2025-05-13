function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      // Le mot à remplacer commence par une majuscule
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      // Le mot à remplacer commence par une minuscule
      after = after[0].toLowerCase() + after.slice(1);
    }
  
    return str.replace(before, after);
  }
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "lying"));