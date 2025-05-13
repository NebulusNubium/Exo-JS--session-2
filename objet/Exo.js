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

