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
// Import der Komponenten
import { Create } from './Create'
import { Details } from './Details'
import { Edit } from './Edit'
import { Home } from './Home'

const useStyles = makeStyles(theme =>
    createStyles({
        main: {
            height: '50vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)

const RoutePaths = {
    HOME: '/',
    EDIT: '/edit',
    DETAILS: '/details',
    CREATE: '/create',
}

// Anzeigen der Komponenten entsprechend des Pfades
const Routes = (
    <Switch>
        <Route path={RoutePaths.DETAILS}>
            <Details />
        </Route>
        <Route path={RoutePaths.CREATE}>
            <Create />
        </Route>
        <Route path={RoutePaths.EDIT}>
            <Edit />
        </Route>
        <Route path={RoutePaths.HOME}>
            <Home />
        </Route>
    </Switch>
)

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
                            <Link to={RoutePaths.HOME}>
                                <Button startIcon={<HomeOutlinedIcon />} size="large"></Button>
                            </Link>

                            <Link to={RoutePaths.DETAILS}>
                                <Button startIcon={<InfoOutlinedIcon />} size="large"></Button>
                            </Link>

                            <Link to={RoutePaths.CREATE}>
                                <Button
                                    startIcon={<AddCircleOutlineOutlinedIcon />}
                                    size="large"></Button>
                            </Link>

                            <Link to={RoutePaths.EDIT}>
                                <Button startIcon={<EditOutlinedIcon />} size="large"></Button>
                            </Link>
                        </Toolbar>
                    </AppBar>

                    <div className={classes.main}>{Routes}</div>
                </Container>
            </ThemeProvider>
        </Router>
    )
}

export default App
