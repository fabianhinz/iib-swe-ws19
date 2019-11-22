import { Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@material-ui/core'
import React from 'react'

import RecipeImage from '../../img/pizza.jpg'
import { imageStyle } from '../Home/Recipes'
const Edit = () => (
    <Card>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardHeader title="Rezept bearbeiten"></CardHeader>
            </Grid>
            <Grid item xs={12}>
                <CardContent>
                    <form>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Titel"
                                placeholder="Rezepttitel eingeben"
                                fullWidth
                                defaultValue="Pizza Diavolo"
                                inputProps={{ style: { fontSize: 35 } }}
                            />
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="icon-button-file"
                                    type="file"
                                />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" component="span">
                                        <img alt="complex" src={RecipeImage} style={imageStyle} />
                                    </IconButton>
                                </label>
                            </Grid>
                            <Grid container item xs={8}>
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        label="Beschreibung"
                                        placeholder="Beschreibung eingeben"
                                        multiline
                                        fullWidth
                                        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua."
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        label="Portionen"
                                        placeholder="Portionen eingeben"
                                        defaultValue="4"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        required
                                        label="Zeit in Minuten"
                                        placeholder="Zeit eingeben"
                                        defaultValue="45"
                                    />
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        required
                                        multiline
                                        label="Zutaten"
                                        placeholder="Zutatenliste eingeben"
                                        fullWidth
                                        defaultValue="500g Zutat1, 250ml Zutat2, 3 Zutat3, 2 Zutat4, 1 Prise Zutat5"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Anleitung"
                                    placeholder="Anleitung eingeben"
                                    multiline
                                    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua."
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
)

export default Edit
