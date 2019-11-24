import React, { useState } from 'react'
import { render } from 'react-dom'

/*
 * der HTML-Tag 'button' ruft beim DOM-Event 'click' den übergebenen Callback auf.
 * Dieser hat zur Folge dass die setCounter Funktion aufgerufen und der Counter um eins erhöht wird
 */
const StateHooks = () => {
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')

    return (
        <div>
            <h3>you clicked me {counter} times</h3>
            <h3>current input value: {input}</h3>

            <input onChange={e => setInput(e.target.value)} value={input} />
            <button onClick={() => setCounter(previous => ++previous)}>+1</button>
        </div>
    )
}

render(<StateHooks />, document.getElementById('root'))
