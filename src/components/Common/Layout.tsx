import Backdrop1 from './Backdrop1'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import { CssBaseline, PaletteMode } from '@mui/material'
import { useMemo } from 'react'
import storeCommon from './common.store'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // color: {
          //   default: 'black',
          // },
          // background: {
          //   default: 'rgb(255,255,255)',
          // },
          // secondary: {
          //   main: '#82cafc',
          // },
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // color: {
          //   default: '#C3C3C5',
          // },
          background: {
            default: '#0D1019',
          },
          secondary: {
            main: '#192334',
          },
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: 'black',
          //   paper: deepOrange[900],
          // },
          text: {
            primary: '#C3C3C5',
            // secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: 'roboto-black',
    body1: {
      fontFamily: 'poppins',
    },
  },
})

declare global {
  interface Window {
    provider1: any
  }
}

export default function Layout({ children }: { children: any }) {
  const mode = storeCommon((s) => s.mode)

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
      <Backdrop1 />
      <ToastContainer />
    </ThemeProvider>
  )
}
