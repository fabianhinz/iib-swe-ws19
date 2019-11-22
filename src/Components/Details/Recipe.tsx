import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import React from 'react'

import RecipeImage from '../../img/pizza.jpg'
import { imageStyle } from '../Home/Recipes'

const Recipe = () => (
    <Card>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardHeader title="Pizza Diavolo"></CardHeader>
            </Grid>

            <Grid item xs={12}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img alt="complex" src={RecipeImage} style={imageStyle} />
                        </Grid>
                        <Grid container item xs={8}>
                            <Grid item xs={10}>
                                <Typography variant={'h6'}>Beschreibung</Typography>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant={'h6'}>Portionen</Typography>
                                Dieses Rezept ergibt 4 Portionen
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant={'h6'}>Zeit</Typography>
                                ca. 45 Minuten
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant={'h6'}>Zutaten</Typography>
                                500g Zutat1, 250ml Zutat2, 3 Zutat3, 2 Zutat4, 1 Prise Zutat5
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={'h6'}>Anleitung</Typography>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
)

export default Recipe
