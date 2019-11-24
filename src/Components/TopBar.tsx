import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../Routes/Navigation'

const TopBar = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Navigation />
        </Toolbar>
    </AppBar>
)

export default TopBar
