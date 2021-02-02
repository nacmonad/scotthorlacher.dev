
import Head from 'next/head'
import PageLoader from '../components/PageLoader'
import BaseLayer from '../components/BaseLayer'
import Layer from '../components/Layer'

import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/Home.module.css'

const layers = [{
    id:`layer-1`,
    style: {
      position:'relative',
      zIndex:3,
      backgroundColor:'red',
    }
  }, {
    id:`layer-2`,
    style: {
      position:'relative',
      zIndex:2,
      backgroundColor:'green'
    }
  },
  {
    id:`layer-3`,
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

  console.log("selectedLayer", selectedLayer)
  return (
    <div className="root-container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        { showLoader && <PageLoader show={showLoader}/>}
      </AnimatePresence>
      { !showLoader && 
        (<main 
          className={styles.main} onClick={e=>{
          e.stopPropagation();
          setSelectedLayer(0)
        }}>
            <BaseLayer isOpen={selectedLayer === 0}/>
            {
              layers.map((l,i)=>(
                
                <Layer layer={l} isOpen= {selectedLayer === i+1} index={i} selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer}/>
                ))
            }
        </main>)}
    </div>
  )
}
