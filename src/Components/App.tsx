/* eslint-disable no-redeclare */
import {
    AppBar,
    Card,
    CardHeader,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Toolbar,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { FC } from 'react'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'
import { Search } from './Search/Search'

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
    })
)

const App: FC = () => {
    const classes = useStyles()

    return (
        <ThemeProvider theme={responsiveTheme}>
            <CssBaseline />

            <Container maxWidth="lg">
                <AppBar position="absolute">
                    <Toolbar>
                        <Search />
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
