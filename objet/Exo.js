1// créer un objet person

const person = {
    firstName: 'Toto',
    lastName: 'Blob',
    age: 15
}

console.log(person)

2//ajouter fonction greet
person.greet = function greet(){
    console.log('hello, my name is '+this.firstName+" "+this.lastName)
}
console.log(person.greet())

3// update & delete

const age = person.age = 30
console.log(person.age)
delete person.lastName
console.log(person)

4// créer objet "car" avec une fonction
function car(brand, model, year){
    this.brand = 'brand'
    this.model = 'model'
    this.year = 'year'
}
const nezCar = new car('ghibli','totoro',1986)
function start(){
    console.log('The car is starting')
}
function info(){
    console.log(nezCar)
}

console.log(start(),info())