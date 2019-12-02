import { Fab } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { blue } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import React from 'react'

const ernaehrung = ['Fleisch', 'Vegetarisch']
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

export interface ErnaehrungDialog {
    open: boolean
    selectedValue: string
    //TODO- nicht nur schließen
    onClose: (value: string) => void
}

function DialogForErnaehrung(props: ErnaehrungDialog) {
    const classes = useStyles()
    const { onClose, selectedValue, open } = props

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
                {ernaehrung.map(ernaehrung => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(ernaehrung)}
                        key={ernaehrung}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <FastfoodIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ernaehrung} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}

export default function ErnaehrungDialogAnzeige() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(ernaehrung[1])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (value: string) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div>
            <Typography variant="subtitle1" style={{ fontSize: '80%' }}>
                Selected:{selectedValue}
            </Typography>
            <br />
            <Fab color="primary" aria-label="art" onClick={handleClickOpen}>
                <FastfoodIcon />
            </Fab>
            <DialogForErnaehrung selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}
