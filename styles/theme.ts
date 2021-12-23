import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme({
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 400,
      marginBottom: 24,
    },
    h2: {
      fontSize: 28,
      fontWeight: 400,
      marginBottom: 16,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme