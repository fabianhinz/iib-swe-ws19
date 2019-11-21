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

import React, { FC } from 'react'

import logo from '../icons/logo.svg'
import { responsiveTheme } from '../theme'
import { ThemeProvider } from '@material-ui/styles'

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
