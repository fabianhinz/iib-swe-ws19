import {
    AppBar,
    Card,
    CardHeader,
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { fade } from '@material-ui/core/styles'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import SearchIcon from '@material-ui/icons/Search'
import React, { FC } from 'react'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 20,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            marginRight: theme.spacing(1),
        },

        main: {
            height: '50vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)

const App: FC = () => {
    const classes = useStyles()

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

    const result = words.filter(word => word.length > 6)

    console.log(result)

    return (
        <ThemeProvider theme={responsiveTheme}>
            <CssBaseline />

            <Container maxWidth="lg">
                <AppBar position="absolute">
                    <Toolbar>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Typography variant="h6" noWrap>
                            Projekt TeamDone
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.main}>
                    <Grid container spacing={2} justify="center">
                        {['Empanadas', 'Salz', 'Salat', 'Nudeln mit Tomatensauce'].map(recipe => (
                            <Grid key={recipe} item xs={12} md={6} lg={4}>
                                <Card>
                                    <CardHeader title={recipe} />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default App
