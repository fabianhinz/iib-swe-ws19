/* eslint-disable @typescript-eslint/no-unused-vars */
//Hallo das wird die Testseite Search
import { createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import React from 'react'

export class Create extends React.Component(
const useStyles = makeStyles(theme =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 20,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            marginRight: theme.spacing(1),
        },
    })
)
)
