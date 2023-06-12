import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

export default ( {isOpen, isTriggered, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.LayerMobile} ${isOpen ? styles.OpenMobile: styles.ClosedMobile  }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
                    display:'flex',
                    position:'relative',
                    //bottom:'3rem'
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
                  whileHover={{ height: isOpen ? '100vh': '3rem' }}

                 
                  
                >
                  {isOpen && 
                  	<div className={styles.contentRootCentered}>
                      <div className={styles.closeIconWrapper}>
                        <i className="fa fa-close"/>
                      </div>
                      <h4>Drop me a line</h4>
                  		<a className={styles.emailButtonMobile} 
                  			href="mailto:admin@scotthorlacher.dev" 
                  			target="_blank"
                  			onClick={(e)=>{
	                  			e.stopPropagation();
                  		}}>admin@scotthorlacher.dev</a>
                  	</div>
                  	}
                    {!isOpen && <i className={`${styles.chevron} fa fa-chevron-up`} style={{opacity: isTriggered? 1 : 0}}/>}

                </motion.div>
                )
}