import Head from "next/head";
import ReactBreakpoints from 'react-breakpoints'

import '../styles/globals.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
 
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
          <title>scotthorlacher.dev</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#696969" />
          <meta name="description" content="Official website for Scott Horlacher." />

          <link rel="shortcut icon" href="sh.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alfa+Slab+One&family=Oswald&family=Spectral&display=swap" rel="stylesheet"/>

      </Head>
	  	<Component {...pageProps} />
	  </ReactBreakpoints>
  }


export default MyApp
