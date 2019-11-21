/* eslint-disable no-unused-vars */

function myAwesomeFunction() {
    console.log('you called the awesome function')
}
myAwesomeFunction()

const myAwesomeArrowFunction = () => console.log('you called the awesome arrow function')
myAwesomeArrowFunction()

const useClosure = initialValue => {
    let value = initialValue

    const increment = () => ++value

    return increment
}

const returnedByClosure = useClosure(1)
const result = returnedByClosure()
