import { Card, CardHeader, Grid } from '@material-ui/core'
import React from 'react'

const Recipes = () => (
    <Grid container spacing={2} justify="center">
        {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce', 'Burger'].map(recipe => (
            <Grid key={recipe} item xs={12} md={6} lg={4}>
                <Card>
                    <CardHeader title={recipe} />
                </Card>
            </Grid>
        ))}
    </Grid>
)

export default Recipes
