import React from 'react'
import { render } from 'react-dom'

// Einer Variablen ein JSX-Element zuweisen
const jsx = <div>hello jsx</div>

// gleichbedeutender Aufruf, nur für das Verständnis
const withoutJsx = React.createElement('div', null, 'hello jsx')

// Die Variable in einer Komponente verwenden
const App = () => <div>{jsx}</div>

// Eine Komponente in einer anderen Komponente verwenden
const JsxComponent = () => (
    <div>
        <App />
        {withoutJsx}
    </div>
)

// Bei Eingabe von Text in das input Element wird der Callback aufgerufen
const InputComponent = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return <input onChange={handleChange} />
}

render(<JsxComponent />, document.getElementById('root'))
