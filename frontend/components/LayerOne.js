import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

import SkillCard from './SkillCard';

import skills from '../data/skills';

export default ( {isOpen, isTriggered, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.Layer} ${isOpen ? styles.Open: styles.Closed }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
                    zIndex:3
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
                      <h2>Skills</h2>
                  		{
                  			skills.map((skill, index)=>(<SkillCard skill={skill} index={index}/>))
                  		}
                  	</div>}
                  {!isOpen && <i className={`${styles.chevron} fa fa-chevron-left`} style={{opacity: isTriggered? 1 : 0}} />}
                </motion.div>
                )
}