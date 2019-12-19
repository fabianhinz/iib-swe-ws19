import 'typeface-inconsolata'
import 'typeface-quicksand'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'
import lightBlue from '@material-ui/core/colors/lightBlue'
import yellow from '@material-ui/core/colors/pink'

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: lightBlue,
        error: yellow,
        contrastThreshold: 4,
        tonalOffset: 0.6,
    },
    typography: {
        h1: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        h2: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        h3: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        h4: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        h5: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        h6: {
            fontFamily: 'typeface-quicksand, sans-serif',
        },
        button: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        subtitle1: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        subtitle2: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        body1: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        body2: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        caption: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
        overline: {
            fontFamily: 'typeface-inconsolata, monospace',
        },
    },
})

export const responsiveTheme = responsiveFontSizes(theme)
