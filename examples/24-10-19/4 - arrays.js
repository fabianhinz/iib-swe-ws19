const someDomElements = ['div', 'span', 'p', 'h1']
console.log(someDomElements)

const onlyTheFirstElement = someDomElements[0]
console.log(onlyTheFirstElement)

someDomElements.push('h2')
console.log(someDomElements)

someDomElements.push(...['button', 'table'])
console.log(someDomElements)

// ? some useful integrated functions

const onlyTheFirstTwoElements = someDomElements.slice(0, 2)
console.log(onlyTheFirstTwoElements)

const thelastElement = someDomElements.slice(-1)
console.log(thelastElement)

const elementsWithLengthGreaterTwo = someDomElements.filter(element => element.length > 2)
console.log(elementsWithLengthGreaterTwo)

const iterateOverAllElementsAndReturnEach = someDomElements.map(element => element)
console.log(iterateOverAllElementsAndReturnEach)

let isDivInside = false
someDomElements.forEach(element => {
    if (element === 'div') isDivInside = true
})
console.log(isDivInside)
