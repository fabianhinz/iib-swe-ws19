import {
    AppBar,
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
import algoliasearch from 'algoliasearch/lite'
import React, { FC, useEffect } from 'react'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'

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
        <ThemeProvider theme={responsiveTheme}>
            <CssBaseline />

            <Container maxWidth="lg">
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Projektvorlage
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.main}>
                    <Grid container spacing={2} justify="center">
                        {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce'].map(
                            recipe => (
                                <Grid key={recipe} item xs={12} md={6} lg={4}>
                                    <Card>
                                        <CardHeader title={recipe} />
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default App
