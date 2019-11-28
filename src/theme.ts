import 'typeface-inconsolata'
import 'typeface-quicksand'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'
import yellow from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    typography: {
        fontFamily: 'typeface-inconsolata, typeface-quicksand',
        fontSize: 17,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },

    palette: {
        primary: indigo,
        secondary: red,
        error: yellow,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 4,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.6,
    },
})

export const responsiveTheme = responsiveFontSizes(theme)
