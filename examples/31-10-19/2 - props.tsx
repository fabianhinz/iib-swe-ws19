import React from 'react'
import { render } from 'react-dom'

// das DOM Event 'click' hat zur Folge dass der Callback aufgerufen wird
const ComponentWithProp = props => {
    return <div onClick={props.onChildClick}>{props.name}</div>
}

const ComponentWithDestructering = ({ onChildClick, name }) => {
    return <div onClick={onChildClick}>{name}</div>
}

interface Props {
    onChildClick: () => void
    name: string
}

const ComponentWithDestructeringAndTypedProps = ({ onChildClick, name }: Props) => {
    return <div onClick={onChildClick}>{name}</div>
}

const Component = () => {
    const handleChildClick = () => console.log('called from child')

    return (
        <div>
            <ComponentWithProp onChildClick={handleChildClick} name="jsx" />
            <ComponentWithDestructeringAndTypedProps onChildClick={handleChildClick} name="jsx" />
        </div>
    )
}

render(<Component />, document.getElementById('root'))
