import { AppBar, Button, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../Routes/Navigation'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


const TopBar = () => 
    <AppBar position="fixed">
        <Toolbar>
            <Navigation />
        </Toolbar>
    </AppBar>

export default TopBar
