import {
    Card,
    CardContent,
    CardHeader,
    Container,
    createStyles,
    Grid,
    makeStyles,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import algoliasearch from 'algoliasearch/lite'
import { SnackbarProvider } from 'notistack'
import React, { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { FirebaseService } from '../firebase'
import logo from '../icons/logo.svg'
import RecipeImage from '../img/pizza.jpg'
import Routes from '../Routes/Routes'
import { responsiveTheme } from '../theme'
import TopBar from './TopBar'
const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')
export const index = searchClient.initIndex('recipes')

export const imageStyle = { width: '100%' }
const useStyles = makeStyles(theme =>
    createStyles({
        main: {
            height: '80vh',
            background: `url(${logo}) no-repeat center / 200px`,
            marginTop: theme.spacing(10),
        },
    })
)

interface newRecipe {
    Title: string
}

interface allRecipe {
    Title: string
}

const App: FC = props => {
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
        <Container className={classes.main}>
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
export default App
