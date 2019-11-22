import {
    AppBar,
    Button,
    Container,
    createStyles,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { FC } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'
import CreateRecipe from './Create/Create'
import Recipe from './Details/Recipe'
import EditRecipe from './Edit/Edit'
import Recipes from './Home/Recipes'

const useStyles = makeStyles(theme =>
    createStyles({
        main: {
            height: '50vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)

// Einzelne Ansichten der Ansichten
// @Simon: Statt dieser Funktionen sollten die
// Komponenten importiert werden, die dann unten bei der Switch
// geladen werden

function Details() {
    return <Recipe></Recipe>
}

function Home() {
    return <Recipes></Recipes>
}

const App: FC = () => {
    const classes = useStyles()

    return (
        <Router>
            <ThemeProvider theme={responsiveTheme}>
                <CssBaseline />

                <Container maxWidth="lg">
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" noWrap>
                                Projektvorlage
                            </Typography>
                            <Button>
                                <Link to="/"> Home </Link>
                            </Button>
                            <Button>
                                <Link to="/details"> Details </Link>
                            </Button>
                            <Button>
                                <Link to="/create"> Create </Link>
                            </Button>
                            <Button>
                                <Link to="/edit"> Edit </Link>
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={classes.main}>
                        <Switch>
                            <Route path="/details">
                                <Details />
                            </Route>
                            <Route path="/create">
                                <CreateRecipe />
                            </Route>
                            <Route path="/edit">
                                <EditRecipe />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Container>
            </ThemeProvider>
        </Router>
    )
}

export default App
