import { createMuiTheme } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
          },
        secondary: {
            main: deepOrange[500],
        }
    },
    typography: {
        h1: {
            fontSize: 24
        }
    }
});

export default theme;