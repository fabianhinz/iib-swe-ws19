import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import { FirebaseService } from '../../firebase'

interface PropsDialog {
    open: boolean
    onClose: () => void
}

const LoginDialog = (props: PropsDialog) => {
    const [email, setEmail] = React.useState('')
    const [pw, setPw] = React.useState('')

    const handleSubmit = () => {
        FirebaseService.auth.signInWithEmailAndPassword(email, pw).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                console.log('Wrong password.')
                //openErrorSnack()
            } else {
                console.log(errorMessage)
            }
            console.log(error)
        })

        props.onClose()
    }

    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Einloggen</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Zum Einloggen, bitte Email und Passwort eingeben
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Adresse"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="pw"
                    label="Passwort"
                    type="password"
                    fullWidth
                    value={pw}
                    onChange={event => setPw(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Abbrechen
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Einloggen
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
