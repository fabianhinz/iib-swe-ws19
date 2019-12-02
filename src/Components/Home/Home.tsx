import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { Box, Container, createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'

import RecipeImage from '../../img/pizza.jpg'
import DauerDialogAnzeige from './../dauer/Zubereitungszeit'
import ErnaehrungDialogAnzeige from './../ernaehrung/Ernaehrung'
import KategorienDialogAnzeige from './../kategorien/kategorien'
import SaisonsDialogAnzeige from './../saisons/Saisons'

export const imageStyle = { width: '100%' }
const useStyles = makeStyles(theme =>
    createStyles({
        home:{ 
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        kategorien: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    })
)

const Home: FC = () => {

    const classes = useStyles()

    return (
        <Container className={classes.home}>
            <Grid container spacing={2} justify="center">
                {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce', 'Burger'].map(
                    recipe => (
                        <Grid key={recipe} item xs={12} md={6} lg={4}>
                            <Card>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <img
                                            src={RecipeImage}
                                            alt="RecipeImage"
                                            style={imageStyle}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <CardHeader title={recipe} />
                                        <CardContent>Erstellt am 01.01.1970</CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>
            <Box className={classes.kategorien}>
                <KategorienDialogAnzeige></KategorienDialogAnzeige>
                <ErnaehrungDialogAnzeige></ErnaehrungDialogAnzeige>
                <DauerDialogAnzeige></DauerDialogAnzeige>
                <SaisonsDialogAnzeige></SaisonsDialogAnzeige>
            </Box>
        </Container>
    )
}

export default Home
