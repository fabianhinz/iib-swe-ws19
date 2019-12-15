/* eslint-disable @typescript-eslint/no-unused-vars */
//Hallo das wird die Testseite Search
import { tsAnyKeyword } from '@babel/types'
import { createStyles, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { relative } from 'path'
import React, { KeyboardEvent, useState } from 'react'

import { index } from '../App'

const styleSearch = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: 1,
        width: '40%',
        backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    searchIcon: {
        marginRight: 2,
        float: 'left',
    },
    styleDiv: {
        display: 'inline-block',
        float: 'left',
        //overflow: 'hidden',
    },
}))

export const Search = () => {
    const classes = styleSearch()

    //input variable, setInput Funktion. Man kann die Funktio setInput aufrufen und dann wird den Wert input gesetz
    const [input, setInput] = useState('')
    //onChange : jedes mal, dass der Inhalt in Inputbase geändert wird, Dann wird die Funktion
    const callResult = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log('CallResult: ' + input)
        }
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <div className={classes.styleDiv}>
                <InputBase
                    placeholder="Search…"
                    onKeyDown={e => callResult(e)}
                    onChange={e => setInput(e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    )
}
