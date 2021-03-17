import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

import SkillCard from './SkillCard';
import skills from '../data/skills';

const chevronVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  }
}

export default ( {isOpen, isTriggered, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.LayerMobile} ${isOpen ? styles.OpenMobile: styles.ClosedMobile }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
                    position:'relative',
                    top:isOpen ? '4rem' : 0
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
                  whileHover={{ height: isOpen ? '92vh': '4rem' }}

                 
                  
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
                    <div style={{
                      height:'6rem',
                      width:0
                    }}/>
                  	</div>}
                  {!isOpen && <i className={`${styles.chevron} fa fa-chevron-up`} style={{opacity: isTriggered? 1 : 0}}/>}

                  
                </motion.div>
                )
}