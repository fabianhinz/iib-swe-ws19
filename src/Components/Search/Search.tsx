/* eslint-disable @typescript-eslint/no-unused-vars */
//Hallo das wird die Testseite Search
import { tsAnyKeyword } from '@babel/types'
import { createStyles, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { relative } from 'path'
import React from 'react'

import { index } from '../App'

const styleSearch = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: 1,
        width: '20%',
        backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    searchIcon: {
        marginRight: 2,
        float: 'left',
    },
    styleDiv: {
        display: 'inline-block',
        float: 'left',
    },
}))

export const Search = () => {
    const classes = styleSearch()
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <div className={classes.styleDiv}>
                <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </div>
        </div>
    )
}
