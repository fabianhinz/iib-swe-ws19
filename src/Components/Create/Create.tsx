import { Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import React from 'react'

const Create = () => (
    <Card>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardHeader title="Rezept erstellen"></CardHeader>
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
                                        <PhotoCamera />
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
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        label="Portionen"
                                        placeholder="Portionen eingeben"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        required
                                        label="Zeit in Minuten"
                                        placeholder="Zeit eingeben"
                                    />
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        required
                                        multiline
                                        label="Zutaten"
                                        placeholder="Zutatenliste eingeben"
                                        fullWidth
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
                                    rows="4"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
)

export default Create
