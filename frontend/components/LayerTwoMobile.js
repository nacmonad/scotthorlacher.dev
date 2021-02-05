import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

export default ( {isOpen, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.LayerMobile} ${isOpen ? styles.OpenMobile: styles.ClosedMobile }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
                    position:'relative',
                    top:isOpen ? '2rem' : 0
                  }}
                  onClick={(e)=>{
                    e.stopPropagation();
                    console.log("layer bang: ", index)
                    console.log("isOpen?")
                    if(isOpen)  {
                    	console.log("DESELECT!")
                    	setSelectedLayer(0)
                    }
                    else {
                    	setSelectedLayer(index+1)
                    };
                  }}
                  whileHover={{ height: isOpen ? '96vh': '3rem' }}

                 
                  
                >
                  {isOpen && 
                  	<div className={styles.contentRootCentered}>
                      <div className={styles.closeIconWrapper}>
                        <i className="fa fa-close"/>
                      </div>
                  		<a className={styles.cvButton} onClick={(e)=>{
                  			e.stopPropagation();
                  			alert("PDF not available yet -- contact the webmaster.")
                  		}

                  		}>CV <i className="fa fa-file-pdf-o"/></a>
                  	</div>}

                </motion.div>
                )
}