//Hallo das wird die Testseite Search
import { createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

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

export default Search
