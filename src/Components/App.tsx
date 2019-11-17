import {
    AppBar,
    Box,
    Button,
    Card,
    CardHeader,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { FC } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'

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
    return <h2>Details</h2>
}

function Create() {
    return <h2>Create</h2>
}

function Edit() {
    return <h2>Edit</h2>
}

function Home() {
    return (
        <Grid container spacing={2} justify="center">
            {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce'].map(recipe => (
                <Grid key={recipe} item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader title={recipe} />
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
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
                                <Create />
                            </Route>
                            <Route path="/edit">
                                <Edit />
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
