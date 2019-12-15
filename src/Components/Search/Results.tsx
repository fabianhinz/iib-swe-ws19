import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import algoliasearch from 'algoliasearch/lite'
import React from 'react'

import { index } from '../App'
import { Search } from './Search'

const Results = () => (
    <div>
        {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce', 'Burger'].map(recipe => (
            <div>
                <p>
                    {recipe}
                    <br></br>
                </p>
            </div>
        ))}
    </div>
)

export default Results

// wie verwenden ich den Index um die Ergebnisse anzuzeigen
// ich sollte den Index für die Suche verwenden
//SearchClient brauche ich nicht
