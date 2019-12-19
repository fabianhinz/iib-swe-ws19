import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'
import React from 'react'

interface Props {
    open: boolean
    onDeleConfirm: () => void
    onDeleteAbort: () => void
}

export const ReceipeDeleteDialog = ({ open, onDeleConfirm, onDeleteAbort }: Props) => (
    <Dialog open={open} onClose={onDeleteAbort}>
        <DialogTitle>Sind Sie sich sicher?</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Dies kann nicht rückgängig gemacht werden. Das Rezept wird endgültig gelöscht!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color="secondary" onClick={onDeleConfirm}>
                Ja
            </Button>
            <Button onClick={onDeleteAbort}>Nein</Button>
        </DialogActions>
    </Dialog>
)
