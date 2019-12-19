import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import React, { useEffect, useState } from 'react'

import { index } from '../App'

const Results = ({ searchQuery }: { searchQuery: String }) => {
    const [res, setRes] = useState<string[]>([])
    useEffect(() => {
        index.search(searchQuery).then(result => {
            const results: string[] = result.hits.map(value => value.Title).filter(v => v)
            console.log(result)
            setRes(results)
        })
    }, [searchQuery])
    return (
        <List component="nav" aria-label="main mailbox folders">
            <div>
                {res.map(recipe => (
                    <ListItem button>
                        <ListItemIcon>
                            <FastfoodIcon />
                        </ListItemIcon>
                        <ListItemText primary={recipe} />
                    </ListItem>
                ))}
            </div>
        </List>
    )
}

export default Results
