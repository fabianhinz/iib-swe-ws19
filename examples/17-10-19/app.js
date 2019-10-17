// app.js
function testMe() {
    const element = document.createElement('p')
    const text = document.createTextNode('oh so fancy')

    element.appendChild(text)
    document.getElementById('myApp').appendChild(element)
}

async function fetchData() {
    const response = await fetch('https://localhost:5001/customer')
    const customers = await response.json()

    customers.forEach(customer => {
        const customerElement = document.createElement('p')
        const customerText = document.createTextNode(customer.contactName)
        customerElement.appendChild(customerText)
        document.getElementById('myApp').appendChild(customerElement)
    })
}
