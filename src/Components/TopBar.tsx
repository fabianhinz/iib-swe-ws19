import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../Routes/Navigation'
import Login from './Login/Login'

const TopBar = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Navigation />
            <Login />
        </Toolbar>
    </AppBar>
)

export default TopBar
