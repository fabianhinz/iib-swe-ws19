import { useSnackbar } from 'notistack'
import * as React from 'react'

import { FirebaseService } from '../../firebase'
import LoginButton from './LoginButton'
import LoginDialog from './LoginDialog'

const Login = () => {
    const [open, setOpen] = React.useState(false)

    const { enqueueSnackbar } = useSnackbar()

    React.useEffect(() => {
        return FirebaseService.auth.onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                enqueueSnackbar('user is signed in')
                console.log('user is signed in')
            } else {
                // User is signed out.
                console.log('user is signed out')
            }
        })
    }, [enqueueSnackbar])

    const handleButtonClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <LoginButton onButtonClick={handleButtonClick} />
            <LoginDialog open={open} onClose={handleClose} />
        </>
    )
}

export default Login
