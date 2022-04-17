import { PaletteMode, createTheme } from '@mui/material';
import { lightPalette } from './lightPalette'
import { darkPalette } from './darkPalette';
import { Montserrat } from '../fonts';
import { Localization, esES, enUS } from '@mui/material/locale';
// import RalewayRegulatTtf from '../fonts/raleway/Raleway-Regular.ttf'

export const switchPaletteMode = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette)
  }
});

export const switchLocale = (locale: Localization) => {
  return (locale === 'en') ? enUS : esES
}

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [Montserrat],
      },
    },
  },
  palette: {
    mode: 'light',
    ...(lightPalette),
  },
});