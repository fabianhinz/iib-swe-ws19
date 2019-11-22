import { Container, createStyles, makeStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import algoliasearch from 'algoliasearch/lite'
import React, { FC, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import logo from '../icons/logo.svg'
import Routes from '../Routes/Routes'
import { responsiveTheme } from '../theme'
import TopBar from './TopBar'

const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')
export const index = searchClient.initIndex('recipes')

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

    useEffect(() => {
        index.search('pfann').then(result => {
            console.log(result.hits)
        })
        console.log('hi')
    }, [])

    return (
        <Router>
            <ThemeProvider theme={responsiveTheme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <TopBar />
                    <div className={classes.main}>{Routes}</div>
                </Container>
            </ThemeProvider>
        </Router>
    )
}

export default App