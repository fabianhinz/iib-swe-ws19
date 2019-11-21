import { Card, CardHeader, Grid } from '@material-ui/core'
import React from 'react'

export class Home extends React.Component {
    render() {
        return (
            <Grid container spacing={2} justify="center">
                {['Pfannkuchen', 'Pizza', 'Salat', 'Nudeln mit Tomatensauce'].map(recipe => (
                    <Grid key={recipe} item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader title={recipe} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
}
