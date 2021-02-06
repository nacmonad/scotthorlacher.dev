import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

export default ( {isOpen, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.Layer} ${isOpen ? styles.Open: styles.Closed }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
                    zIndex:1
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
                  whileHover={{ width: isOpen ? '100vw': '4rem' }}

                 
                  
                >
                  {isOpen && 
                  	<div className={styles.contentRoot}>
                      <div className={styles.closeIconWrapper}>
                        <i className="fa fa-close"/>
                      </div>
                      <h4>Drop me a line</h4>
                  		<a className={styles.emailButton} 
                  			href="mailto:admin@scotthorlacher.dev" 
                  			target="_blank"
                  			onClick={(e)=>{
	                  			e.stopPropagation();
                  		}}>admin@scotthorlacher.dev</a>
                  	</div>
                  	}
                    {!isOpen && <i className="fa fa-chevron-left"/>}

                </motion.div>
                )
}