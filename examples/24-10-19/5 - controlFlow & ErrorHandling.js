/* eslint-disable no-unused-vars */

const checked = false

if (checked) {
    // ...
} else if (checked && true) {
    // ...
} else if (checked || false) {
    //...
}

const value = checked ? 'checked' : 'notChecked'

const whatever = 'thisWillBreak'

try {
    switch (whatever) {
        case 'value': {
            console.log(whatever)
            break
        }
        default:
            throw new Error('uuups ')
    }
} catch (error) {
    console.log(error.message)
}
