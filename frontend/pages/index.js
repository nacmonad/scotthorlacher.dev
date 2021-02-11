
import Head from 'next/head'
import PageLoader from '../components/PageLoader2'
import BaseLayer from '../components/BaseLayer'
import LayerOne from '../components/LayerOne'
import LayerTwo from '../components/LayerTwo'
import LayerThree from '../components/LayerThree'
import LayerOneMobile from '../components/LayerOneMobile'
import LayerTwoMobile from '../components/LayerTwoMobile'
import LayerThreeMobile from '../components/LayerThreeMobile'
import {Media} from 'react-breakpoints'
import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/Home.module.css'




export default function Home() {
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

  return (
    <div className="root-container">
      <AnimatePresence>
        { showLoader && <PageLoader show={showLoader}/>}
      { !showLoader && 
        (
            <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.tablet ?
                

                <main 
                  className={styles.main} onClick={e=>{
                  e.stopPropagation();
                  setSelectedLayer(0)
                }}>
                <BaseLayer isMobile={false} isOpen={selectedLayer === 0}/>
                <div className={styles.navLayers}>
                  {
                      layers.map((l,i)=>{
                        switch(i) {
                          case 0:
                            return (
                            <LayerOne layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[2]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                            )
                          case 1:
                            return (
                            <LayerTwo layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[1]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                            )
                            
                          case 2:
                            return (
                            <LayerThree layer={l} isOpen= {selectedLayer === i+1} index={i} isTriggered={layerTriggers[0]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                            )
                          default:
                            return null;
                        }

                      })
                  }
                </div>
              </main>
               :
                <main 
                  className={styles.mobileMain} onClick={e=>{
                  e.stopPropagation();
                  setSelectedLayer(0)
                }}>
                <BaseLayer isMobile={true} isOpen={selectedLayer === 0}/>
                <div className={styles.mobileNavLayers}>
                  <LayerOneMobile layer={layers[0]} isOpen= {selectedLayer === 1} index={0} isTriggered={layerTriggers[2]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                  <LayerTwoMobile layer={layers[1]} isOpen= {selectedLayer === 2} index={1} isTriggered={layerTriggers[1]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                  <LayerThreeMobile layer={layers[2]} isOpen= {selectedLayer === 3} index={2} isTriggered={layerTriggers[0]} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>

                </div>
                <div className={styles.mobileSpacer}/>
                </main>
              }
            </Media>
            

        )
      }
            </AnimatePresence>

    </div>
  )
}
