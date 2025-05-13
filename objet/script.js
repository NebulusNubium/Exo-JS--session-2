//objets

const person = {
    name: 'Francis',
    age: 45,
    isMarried: true,
    children: ['abdoul', 'marie'],
    greet: function() {
        console.log('Hello')
    }
    //ou: greet(name)....
    //on peut aussi mettre des objets dans les objets! pour les afficher ça donnerait:
    // console.log(person.languages.french)
}
person.email = 'message@mail.fr' //ajoute une carac à l'objet en dehors de la const
delete person.email //delete
console.log(person.age)
console.log(person['age'])
console.log(person.greet())

const { name, age } = person //pour créer plusieurs constantes contenant la valeur name et age de l'objet 
console.log(name)

console.log(Object.keys(person)) //affiche toutes les catégories dans l'objet
console.log(Object.values(person)) //affiche uniquement les valeurs des catégories
console.log(Object.entries(person)) //affiche par paire clé-valeurs
console.log(person.hasOwnProperty('age')) //check si l'objet a la catégorie 'age', retour boolean
//Création d'objet avec un constructeur
/*
function Person(name, age, isMarried, children = []) {
    this.name = name
    this.age = age
    this.isMarried = isMarried
    this.children = children
}
const person1= new Person('Blob', 15, true, 'abbie')
const person2= new Person('Jane',29,false)
console.log(person2) 
*/