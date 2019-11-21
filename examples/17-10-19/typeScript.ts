interface Adress {
    street: string
    zipCode: number
}

interface Customer {
    name: string
    adress: Adress
}

const customer: Customer = {
    name: 'fabian',
    adress: {
        street: 'whatever 3',
        zipCode: 76185,
    },
}
