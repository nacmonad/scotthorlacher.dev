
import PageLoader from '../components/loaders/PageLoader2'
import BaseLayer from '../components/layers/BaseLayer'
import LayerOne from '../components/layers/LayerOne'
import LayerTwo from '../components/layers/LayerTwo'
import LayerThree from '../components/layers/LayerThree'
import LayerOneMobile from '../components/layers/LayerOneMobile'
import LayerTwoMobile from '../components/layers/LayerTwoMobile'
import LayerThreeMobile from '../components/layers/LayerThreeMobile'
import {withBreakpoints, Media} from 'react-breakpoints'
import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/Home.module.css'

function Home( { breakpoints, currentBreakpoint } ) {
  const [showLoader, setShowLoader] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(0);
  const [layerTriggers, setLayerTriggers] = useState([false,false,false]);

  const layers = [{
    id:`layer-1`,
    title:'',
    style: {
      //position:'relative',
      //zIndex:1,
      backgroundColor:'red',
    }
  }, {
    id:`layer-2`,
    title: '',
    style: {
      //position:'relative',
      //zIndex:2,
      backgroundColor:'green'
    }
  },
  {
    id:`layer-3`,
    title:'',
    style: {
      //position:'relative',
      //zIndex:3,
      backgroundColor:'blue'
    }
  }];

  useEffect(()=>{
    setShowLoader(true);
    setSelectedLayer(0);
    var to = setTimeout(()=>{
      setShowLoader(false)

    }, 3000);
    return ()=> {
      clearTimeout(to);
    }
  },[])


    useEffect(()=>{
    //sync'd layer open chevron fade triggers
    let t0, t1, t2;
    const trigger = setInterval(()=>{
      setLayerTriggers([true,false,false])
      t0 = setTimeout(()=>{
        setLayerTriggers([false, true, false])
        }, 300)
      t1 = setTimeout(()=>{
        setLayerTriggers([false, false, true])
        }, 600)
      t2 = setTimeout(()=>{
        setLayerTriggers([false, false, false])
        }, 900)

    }, 10000)


    return ()=> {
      clearInterval(trigger)
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  },[])

  const isMobile = breakpoints[currentBreakpoint] <= breakpoints.tablet;
  console.log("media: ",  {
    breakpoints,
    currentBreakpoint,
    isMobile
  })

  return (
    <div className="root-container">

      <AnimatePresence>
        { showLoader && <PageLoader show={showLoader}/>}
        { !showLoader && 
          <main 
                    className={styles.main} onClick={e=>{
                    e.stopPropagation();
                    setSelectedLayer(0)
                  }}>
                  <BaseLayer isMobile={breakpoints[currentBreakpoint] > breakpoints.tablet} isOpen={selectedLayer === 0}/>
     
                  {!isMobile && <div className={styles.navLayers}>
                    {
                        layers.map((l,i)=>{
                          switch(i) {
                            case 0:
                              return (
                              <LayerOne key={l.id} layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[2]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                              )
                            case 1:
                              return (
                              <LayerTwo key={l.id} layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[1]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                              )
                              
                            case 2:
                              return (
                              <LayerThree key={l.id} layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[0]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                              )
                            default:
                              return null;
                          }

                        })
                    }
                  </div>}
                  {isMobile && 
                    <div className={styles.mobileNavLayers}>
                      <LayerOneMobile layer={layers[0]} isOpen= {selectedLayer === 1} index={0} isTriggered={layerTriggers[2]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                      <LayerTwoMobile layer={layers[1]} isOpen= {selectedLayer === 2} index={1} isTriggered={layerTriggers[1]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                      <LayerThreeMobile layer={layers[2]} isOpen= {selectedLayer === 3} index={2} isTriggered={layerTriggers[0]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                  </div>}
        </main>
        }
      </AnimatePresence>
    </div>
  )
}


export default withBreakpoints(Home);