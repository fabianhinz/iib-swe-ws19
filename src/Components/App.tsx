import {
    AppBar,
    Container,
    createStyles,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { fade } from '@material-ui/core/styles'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import SearchIcon from '@material-ui/icons/Search'
import algoliasearch from 'algoliasearch/lite'
import React, { FC, useEffect } from 'react'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'
const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')
export const index = searchClient.initIndex('recipes')

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        main: {
            height: '50vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        <div className={classes.root}>
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
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App
