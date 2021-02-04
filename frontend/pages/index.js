
import Head from 'next/head'
import PageLoader from '../components/PageLoader'
import BaseLayer from '../components/BaseLayer'
import LayerOne from '../components/LayerOne'
import LayerTwo from '../components/LayerTwo'
import LayerThree from '../components/LayerThree'

import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/Home.module.css'

const layers = [{
    id:`layer-1`,
    title:'',
    style: {
      position:'relative',
      zIndex:3,
      backgroundColor:'red',
    }
  }, {
    id:`layer-2`,
    title: '',
    style: {
      position:'relative',
      zIndex:2,
      backgroundColor:'green'
    }
  },
  {
    id:`layer-3`,
    title:'',
    style: {
      position:'relative',
      zIndex:1,
      backgroundColor:'blue'
    }
  }]

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(0);


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

  return (
    <div className="root-container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <AnimatePresence>
        { showLoader && <PageLoader show={showLoader}/>}
      { !showLoader && 
        (<main 
          className={styles.main} onClick={e=>{
          e.stopPropagation();
          setSelectedLayer(0)
        }}>
            <BaseLayer isOpen={selectedLayer === 0}/>
            <div className={styles.navLayers}>
              {
                layers.map((l,i)=>{
                  switch(i) {
                    case 0:
                      return (
                      <LayerOne layer={l} isOpen= {selectedLayer === i+1} index={i} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                      )
                    case 1:
                      return (
                      <LayerTwo layer={l} isOpen= {selectedLayer === i+1} index={i} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                      )
                      
                    case 2:
                      return (
                      <LayerThree layer={l} isOpen= {selectedLayer === i+1} index={i} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                      )
                    default:
                      return null;
                  }

                })
            }
          </div>

        </main>)
      }
            </AnimatePresence>

    </div>
  )
}
