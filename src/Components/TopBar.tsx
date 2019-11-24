import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../Routes/Navigation'
import { Search } from './Search/Search'

const TopBar = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Navigation />
            <Search />
        </Toolbar>
    </AppBar>
)

export default TopBar
