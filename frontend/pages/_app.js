import '../styles/globals.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
import ReactBreakpoints from 'react-breakpoints'
 
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
	  	<Component {...pageProps} />
	  </ReactBreakpoints>
  }


export default MyApp
