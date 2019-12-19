import { Container, createStyles, makeStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import algoliasearch from 'algoliasearch/lite'
import { SnackbarProvider } from 'notistack'
import React, { FC, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import logo from '../icons/logo.svg'
import Routes from '../Routes/Routes'
import { responsiveTheme } from '../theme'
import TopBar from './TopBar'
const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')
export const index = searchClient.initIndex('recipes')

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        main: {
            height: '90vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)

const App: FC = () => {
    const classes = useStyles()
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <Router>
            <SnackbarProvider>
                <ThemeProvider theme={responsiveTheme}>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <TopBar searchQuery={searchQuery} Onsearchquerychange={setSearchQuery} />
                        <div className={classes.main}>
                            <Routes searchQuery={searchQuery} />
                        </div>
                    </Container>
                </ThemeProvider>
            </SnackbarProvider>
        </Router>
    )
}
export default App
