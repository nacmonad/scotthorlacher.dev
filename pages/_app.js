import ReactBreakpoints from 'react-breakpoints'
import Head from 'next/head'
import '../styles/globals.css'

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

function MyApp({ Component, pageProps }) {
  return <ReactBreakpoints breakpoints={breakpoints}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>scotthorlacher.dev</title>

    </Head>
	  	<Component {...pageProps} />
	  </ReactBreakpoints>
  }


export default MyApp
