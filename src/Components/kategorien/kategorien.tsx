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
import CategoryIcon from '@material-ui/icons/Category'
import React from 'react'

import kategorienFilter from './../kategorien/kategorienFunktion'

const kategorien = [
    'Beilage',
    'Hauptgericht',
    'Salat',
    'Suppe',
    'Dessert',
    'Kuchen',
    'Brot',
    'Plätzchen',
    'Getränke',
]
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

export interface KategorieDialog {
    open: boolean
    selectedValue: string
    //TODO- nicht nur schließen
    onClose: (value: string) => void
}

function DialogForKategorie(props: KategorieDialog) {
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
                {kategorien.map(kategorien => (
                    <ListItem button onClick={() => kategorienFilter()} key={kategorien}>
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

export default function KategorienDialogAnzeige() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(kategorien[1])

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
                <CategoryIcon />
            </Fab>
            <DialogForKategorie selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}
