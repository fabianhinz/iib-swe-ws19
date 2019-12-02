/* eslint-disable @typescript-eslint/no-unused-vars */
//Hallo das wird die Testseite Search
import { tsAnyKeyword } from '@babel/types'
import { createStyles, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { styleSearch } from '@material-ui/icons/Search'
import { relative } from 'path'
import React from 'react'

import { index } from '../App'

const styleSearch = {
    marginLeft: 20,
    width: '50%',
    'background-color': '#55c2e3',
    border: '2px solid black',
}

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

/*export class Create extends React.Component(
const useStyles = makeStyles(theme =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 20,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            marginRight: theme.spacing(1),
        },
    })
)
)*/
