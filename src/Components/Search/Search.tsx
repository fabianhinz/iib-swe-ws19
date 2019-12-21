import { InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React, { KeyboardEvent } from 'react'
import { useHistory } from 'react-router-dom'

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
    },
}))

export interface SearchInterface {
    searchQuery: String
    Onsearchquerychange?: any
}

export const Search = ({ searchQuery, Onsearchquerychange }: SearchInterface) => {
    const classes = styleSearch()
    const history = useHistory()

    const callResult = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            history.push('/results')
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
                    value={searchQuery}
                    onKeyDown={e => callResult(e)}
                    onChange={e => Onsearchquerychange(e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    )
}
