import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { Container, createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC, useEffect, useState } from 'react'

import { FirebaseService } from '../../firebase'
import RecipeImage from '../../img/pizza.jpg'

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

interface newRecipe {
    Title: string
}

interface allRecipe {
    Title: string
}

const Home: FC = props => {
    const [recipes, setRecipes] = useState<newRecipe[]>([])
    const [allrecipes, setAllRecipes] = useState<allRecipe[]>([])
    const classes = useStyles()

    useEffect(() => {
        FirebaseService.firestore
            .collection('recipes')
            .orderBy('Created', 'desc')
            .limit(6)
            .onSnapshot(querySnaphot => {
                setRecipes(querySnaphot.docs.flatMap(doc => doc.data()) as newRecipe[])
            })
    }, [])

    useEffect(() => {
        FirebaseService.firestore
            .collection('recipes')
            .orderBy('Title')
            .onSnapshot(querySnaphot => {
                setAllRecipes(querySnaphot.docs.flatMap(doc => doc.data()) as allRecipe[])
            })
    }, [])

    return (
        <Container className={classes.home}>
            <h1>Zuletzt Hinzugefügt:</h1>
            <Grid container spacing={2} justify="center">
                {recipes.map(newrecipe => (
                    <Grid key={newrecipe.Title} item xs={12} md={6} lg={4}>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <img src={RecipeImage} alt="RecipeImage" style={imageStyle} />
                                </Grid>
                                <Grid item xs={8}>
                                    <CardHeader title={newrecipe.Title} />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <h1>Alle Rezepte:</h1>
            <Grid container spacing={1} justify="center">
                {allrecipes.map(allrecipe => (
                    <Grid key={allrecipe.Title} item xs={12} md={6} lg={4}>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <img src={RecipeImage} alt="RecipeImage" style={imageStyle} />
                                </Grid>
                                <Grid item xs={8}>
                                    <CardHeader title={allrecipe.Title} />
                                    <CardContent>{props.children}</CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default Home
