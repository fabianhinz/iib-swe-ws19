import {
    Container,
    createStyles,
    makeStyles,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'
import TopBar from './TopBar'
import Routes from '../Routes/Routes'

const useStyles = makeStyles(theme =>
    createStyles({
        main: {
            height: '50vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)


const App: FC = () => {
    const classes = useStyles()

    return (
        <Router>
            <ThemeProvider theme={responsiveTheme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <TopBar />
                    <div className={classes.main}>
                    {Routes}
                    </div>
                </Container>
            </ThemeProvider>
        </Router>
    )
}

export default App
