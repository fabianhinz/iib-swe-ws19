import {
    AppBar,
    Button,
    Card,
    CardHeader,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
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

const Routes = {
    HOME: '/',
    EDIT: '/edit',
    DETAILS: '/details',
    CREATE: '/create',
}

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
                            <Link to={Routes.HOME}>
                                <Button startIcon={<HomeOutlinedIcon />} size="large"></Button>
                            </Link>

                            <Link to={Routes.DETAILS}>
                                <Button startIcon={<InfoOutlinedIcon />} size="large"></Button>
                            </Link>

                            <Link to={Routes.CREATE}>
                                <Button
                                    startIcon={<AddCircleOutlineOutlinedIcon />}
                                    size="large"></Button>
                            </Link>

                            <Link to={Routes.EDIT}>
                                <Button startIcon={<EditOutlinedIcon />} size="large"></Button>
                            </Link>
                        </Toolbar>
                    </AppBar>

                    <div className={classes.main}>
                        <Switch>
                            <Route path={Routes.DETAILS}>
                                <Details />
                            </Route>
                            <Route path={Routes.CREATE}>
                                <Create />
                            </Route>
                            <Route path={Routes.EDIT}>
                                <Edit />
                            </Route>
                            <Route path={Routes.HOME}>
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
