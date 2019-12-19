import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React from 'react'

interface PropsLogin {
    onButtonClick: () => void
}

const LoginButton = (props: PropsLogin) => (
    <Tooltip title="Login">
        <Fab
            onClick={props.onButtonClick}
            size="small"
            color="secondary"
            aria-label="login"
            //className={classes.fab}
        >
            <AccountCircle />
        </Fab>
    </Tooltip>
)

export default LoginButton
