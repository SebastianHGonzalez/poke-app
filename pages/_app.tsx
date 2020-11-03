import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import Main from 'components/common/Main'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #__next {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
