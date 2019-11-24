import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Navigation = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" noWrap>
                Projektvorlage
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Navigation
