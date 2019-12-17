import React, { useEffect, useState } from 'react'

import { index } from '../App'

const Results = ({ searchQuery }: { searchQuery: String }) => {
    const [res, setRes] = useState<string[]>([])
    useEffect(() => {
        index.search(searchQuery).then(result => {
            const results: string[] = result.hits.map(value => value.Title).filter(v => v)
            console.log(results)
            setRes(results)
        })
    }, [searchQuery])

    return (
        <div>
            {searchQuery}
            {res.map(recipe => (
                <div>
                    <p>
                        {recipe}
                        <br></br>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Results

// wie verwenden ich den Index um die Ergebnisse anzuzeigen
// ich sollte den Index für die Suche verwenden
//SearchClient brauche ich nicht
