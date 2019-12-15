import { Box, Container, Fab, Fade, Paper } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { blue } from '@material-ui/core/colors'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import transitions from '@material-ui/core/styles/transitions'
import Typography from '@material-ui/core/Typography'
import CategoryIcon from '@material-ui/icons/Category'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SpaIcon from '@material-ui/icons/Spa'
import React, { lazy, useEffect, useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'

import { FirebaseService } from '../../firebase'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})
interface Kategorien {
    art: string
    zeit: string
    ernaehrung: string
    saison: string
}

export interface KategorieDialog {
    open: boolean
    selectedValue: string
    //TODO- nicht nur schließen
    onClose: (value: string) => void
}

export function DialogForArt(props: KategorieDialog) {
    const classes = useStyles()
    const { onClose, selectedValue, open } = props
    const [kategorien, setKategorien] = useState<Kategorien[]>([])
    useEffect(() => {
        FirebaseService.firestore.collection('categories').onSnapshot(querySnaphot => {
            setKategorien(querySnaphot.docs.flatMap(doc => doc.data().Art) as Kategorien[])
        })
    }, [])

    const handleClose = () => {
        onClose(selectedValue)
    }

    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Kategorien</DialogTitle>
            <List>
                {kategorien.map(kategorien => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(kategorien.art)}
                        key={kategorien.art}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CategoryIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={kategorien} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}
export function DialogForTime(props: KategorieDialog) {
    const classes = useStyles()
    const { onClose, selectedValue, open } = props

    const [kategorien, setKategorien] = useState<Kategorien[]>([])
    useEffect(() => {
        FirebaseService.firestore.collection('categories').onSnapshot(querySnaphot => {
            setKategorien(querySnaphot.docs.flatMap(
                doc => doc.data().Zubereitungszeit
            ) as Kategorien[])
        })
    }, [])
    const handleClose = () => {
        onClose(selectedValue)
    }

    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Zubereitungszeit</DialogTitle>
            <List>
                {kategorien.map(kategorien => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(kategorien.zeit)}
                        key={kategorien.zeit}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CategoryIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={kategorien} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}
/*
export function DialogForIngredient(props: KategorieDialog) {
    const classes = useStyles()
    const { onClose, selectedValue, open } = props
    const [kategorien, setKategorien] = useState<Kategorien[]>([])
    useEffect(() => {
        FirebaseService.firestore.collection('categories').onSnapshot(querySnaphot => {
            setKategorien(querySnaphot.docs.flatMap(doc => doc.data().Ernährung) as Kategorien[])
        })
    }, [])
    const handleClose = () => {
        onClose(selectedValue)
    }

    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Ernährung</DialogTitle>
            <List>
                {kategorien.map(kategorien => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(kategorien.ernaehrung)}
                        key={kategorien.ernaehrung}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CategoryIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={kategorien} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
} */
/*
export function DialogForSeason(props: KategorieDialog) {
    const classes = useStyles()
    const { onClose, selectedValue, open } = props
    const [kategorien, setKategorien] = useState<Kategorien[]>([])
    useEffect(() => {
        FirebaseService.firestore.collection('categories').onSnapshot(querySnaphot => {
            setKategorien(querySnaphot.docs.flatMap(doc => doc.data().Saisons) as Kategorien[])
        })
    }, [])
    const handleClose = () => {
        onClose(selectedValue)
    }

    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Saisons</DialogTitle>
            <List>
                {kategorien.map(kategorien => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(kategorien.saison)}
                        key={kategorien.saison}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CategoryIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={kategorien} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}
*/
/*
export default function ArtDialogAnzeige() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState()

    const handleClickOpen = (kat: React.ComponentType<KategorieDialog>) => {
        setOpen(true)
    }

    const handleClose = (value: string) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div>
            <Container>
                <Box>
                    <Typography variant="subtitle1" style={{ fontSize: '80%' }}>
                        Selected:{selectedValue}
                    </Typography>
                    <br />
                    <Fab color="primary" onClick={() => handleClickOpen(DialogForArt)}>
                        <CategoryIcon />
                    </Fab>
                    <DialogForArt selectedValue={selectedValue} open={open} onClose={handleClose} />
                </Box>
                <Box>
                    <Typography variant="subtitle1" style={{ fontSize: '80%' }}>
                        Selected:{selectedValue}
                    </Typography>
                    <br />
                    <Fab
                        color="primary"
                        aria-label="art"
                        onClick={() => handleClickOpen(DialogForSeason)}>
                        <SpaIcon />
                    </Fab>
                    <DialogForSeason
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                    />
                </Box>

                <Box>
                    <Typography variant="subtitle1" style={{ fontSize: '80%' }}>
                        Selected:{selectedValue}
                    </Typography>
                    <br />
                    <Fab color="primary" onClick={() => handleClickOpen(DialogForIngredient)}>
                        <FastfoodIcon />
                    </Fab>
                    <DialogForIngredient
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                    />
                </Box>
            </Container>
        </div>
    )
}
*/
