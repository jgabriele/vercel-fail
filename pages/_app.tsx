import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { EmotionCache } from '@emotion/utils'
import { SessionProvider } from 'next-auth/react'
import createCache from '@emotion/cache'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

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

const clientSideEmotionCache = createCache({ key: 'css' })

type Props = AppProps & { emotionCache: EmotionCache }

export default function MyApp(props: Props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>GreenPro</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}
