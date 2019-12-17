import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import React from 'react'

import RecipeImage from '../../img/pizza.jpg'
export const imageStyle = { width: '100%' }
const Home = () => (
    <Grid container spacing={2} justify="center">
        {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce', 'Burger'].map(recipe => (
            <Grid key={recipe} item xs={12} md={6} lg={4}>
                <Card>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img src={RecipeImage} alt="RecipeImage" style={imageStyle} />
                        </Grid>
                        <Grid item xs={8}>
                            <CardHeader title={recipe} />
                            <CardContent>Erstellt am 01.01.1970</CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        ))}
    </Grid>
)

export default Home
