import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'

const EffectHook = () => {
    const [joke, setJoke] = useState('')

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(({ value }) => setJoke(value))
    }, [])

    // the array signals React when to call the function inside useEffect
    useEffect(() => {
        if (joke.length === 0) return
        console.log('new joke')
    }, [joke])

    return <div>{joke} </div>
}

render(<EffectHook />, document.getElementById('root'))
