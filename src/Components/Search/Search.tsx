/* eslint-disable @typescript-eslint/no-unused-vars */
//Hallo das wird die Testseite Search
import { tsAnyKeyword } from '@babel/types'
import { createStyles, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const styleSearch = {
    marginLeft: 20,
    width: '50%',
    'background-color': '#55c2e3',
}

const styleSearchIcon = {
    marginRight: 10,
}

export class Search extends React.Component {
    // React components implement a render() method that takes input data and returns what to display
    render() {
        return (
            <div style={styleSearch}>
                <SearchIcon />

                <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </div>
        )
    }
}
