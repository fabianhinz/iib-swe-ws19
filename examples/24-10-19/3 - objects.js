const anObject = {
    aProp: 'aValue',
    anotherProp: true,
    aPropAsAFunction: () => console.log('oh a prop with a function'),
}

// ? Property accessors
console.log(anObject.aProp)
console.log(anObject['aProp'])

// ? Destructering
const { aProp } = anObject
console.log(aProp)

const name = 'fabian'
const surname = 'hinz'

const person = { name, surname }
console.log(person)

person.adress = {
    city: 'Karlsruhe',
}
console.log(person)

// ? Rest properties
const { adress, ...nameAndSurname } = person
console.log(adress)
console.log(nameAndSurname)

// ? Spread properties
const personWithDifferentAdress = { ...nameAndSurname, adress: { city: 'Stuttgart' } }
console.log(personWithDifferentAdress)

// ? avoid collition
const { adress: sameAdressDifferentVariable } = person
console.log(sameAdressDifferentVariable)
