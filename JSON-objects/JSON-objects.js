//OBJECTS

const myArray = ['Jim', 28,'red']
console.log(myArray[2])

//objects have curly braces
// objects have key/value pairs
let person = {
    name:'Jim',
    age: 28,
    hairColor: 'red',
    run: function(){console.log('running')}
}
// we access object's state values with a dot
console.log(person.age)
// objects can contain functions also known as methods
person.run()
person.age = person.age +1
console.log(person.age)

//const walk = function(){console.log('walking slow')}
//same thing as saying
//function walk (){console.log('walking slow')}


let anotherPerson = {
    name: 'Sue',
    age: 27,
    hairColor: 'brown',
    walk: function (){console.log('walking')}
}
console.log('another person hair color ', anotherPerson.hairColor)
anotherPerson.walk()

//array of 2 people objects
let people = [person, anotherPerson,{ name: 'Mary', age: 32, hairColor: 'pink', run: function(){console.log('walking fast')} }]
console.log(people[0])

console.log(people[0])
console.log(people)

// how can we use arrays of objects???
people.forEach(person=>console.log(person.name + ' has ' + person.hairColor + ' hair.'))

