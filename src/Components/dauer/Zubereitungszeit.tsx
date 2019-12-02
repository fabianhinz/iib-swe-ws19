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
import ScheduleIcon from '@material-ui/icons/Schedule'
import React from 'react'

const dauer = [
    'bis 15 Minute',
    'bis 30 Minute',
    'bis 1 Stunde',
    'bis 3 Stunden',
    'bis 5 Stunden',
    'ganzen Tag',
]
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

export interface DauerDialog {
    open: boolean
    selectedValue: string
    //TODO- nicht nur schließen
    onClose: (value: string) => void
}

function DialogForDauer(props: DauerDialog) {
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
                {dauer.map(dauer => (
                    <ListItem button onClick={() => handleListItemClick(dauer)} key={dauer}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <ScheduleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={dauer} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}

export default function DauerDialogAnzeige() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(dauer[1])

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
                <ScheduleIcon />
            </Fab>
            <DialogForDauer selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}
