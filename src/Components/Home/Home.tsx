import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { Box, Container, createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getThemeProps } from '@material-ui/styles'
import React, { FC, useEffect, useState } from 'react'

import { FirebaseService } from '../../firebase'
import RecipeImage from '../../img/pizza.jpg'
import DauerDialogAnzeige from './../dauer/Zubereitungszeit'
import ErnaehrungDialogAnzeige from './../ernaehrung/Ernaehrung'
import DialogForErnaehrung from './../ernaehrung/Ernaehrung'
//import ArtDialogAnzeige from './../kategorien/kategorien'
import SaisonsDialogAnzeige from './../saisons/Saisons'

export const imageStyle = { width: '100%' }
const useStyles = makeStyles(theme =>
    createStyles({
        home: {
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

interface Recipe {
    Title: string
    Categorie: string
}

const Home: FC = props => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const classes = useStyles()

    //TODO Selected Kategorie statt 'Hauptgericht'
    useEffect(() => {
        FirebaseService.firestore
            .collection('recipes')
            .where('Categorie', 'array-contains', 'Hauptgericht')
            .onSnapshot(querySnaphot => {
                setRecipes(querySnaphot.docs.flatMap(doc => doc.data()) as Recipe[])
            })
    }, [])

    return (
        <Container className={classes.home}>
            <Grid container spacing={2} justify="center">
                {recipes.map(recipe => (
                    <Grid key={recipe.Title} item xs={12} md={6} lg={4}>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <img src={RecipeImage} alt="RecipeImage" style={imageStyle} />
                                </Grid>
                                <Grid item xs={8}>
                                    <CardHeader title={recipe.Title} />
                                    <CardContent>{props.children}</CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.kategorien}>
                <DialogForErnaehrung />
                <DauerDialogAnzeige></DauerDialogAnzeige>
                <SaisonsDialogAnzeige></SaisonsDialogAnzeige>
            </Box>
        </Container>
    )
}

export default Home
