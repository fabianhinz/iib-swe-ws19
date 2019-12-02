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
import SpaIcon from '@material-ui/icons/Spa'
import React from 'react'

const saisons = ['Frühling', 'Sommer', 'Herbst', 'Winter']
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

export interface SaisonDialog {
    open: boolean
    selectedValue: string
    //TODO- nicht nur schließen
    onClose: (value: string) => void
}

function DialogForSaison(props: SaisonDialog) {
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
                {saisons.map(saisons => (
                    <ListItem button onClick={() => handleListItemClick(saisons)} key={saisons}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <SpaIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={saisons} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}

export default function SaisonsDialogAnzeige() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(saisons[1])

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
                <SpaIcon />
            </Fab>
            <DialogForSaison selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}
