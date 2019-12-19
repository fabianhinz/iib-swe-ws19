import { AppBar, createStyles, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../Routes/Navigation'
import Login from './Login/Login'

const useStyles = makeStyles(() =>
    createStyles({
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    })
)

const TopBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Navigation />
                <Login />
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
