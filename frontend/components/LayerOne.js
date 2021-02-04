import { motion } from 'framer-motion';
import styles from '../styles/Layer.module.css';

import SkillCard from './SkillCard';

const skills = [{
	title:'NodeJS',
	description:'API development, sockets, streams, buffers oh my.',
	icon: 'React-icon.svg',
	score:4,
	tags: ['backend']
},{
	title:'Docker',
	description:'Containerization of apps and microservice architecture.',
	icon: 'docker_icon.png',
	score:3,
	tags: ['backend', 'cloud']
}, {
	title:'ReactJS',
	description:'Frontend UI/UX.  Realtime and responsive data-driven design, UI frameworks (Material, Semantic, Bootstrap etc).',
	icon: 'React-icon.svg',
	score: 4,
	tags: ['frontend', 'ui']
}, {
	title:'Selenium',
	description:'Automation for data scraping and testing.',
	icon: 'selenium-test-automation.png',
	score: 3.5,
	tags: ['automation', 'testing', 'scraping']
}, {
	title:'Data Science',
	description:'Modeling and Statistics.  Applications of ML.',
	score: 3,
	icon: 'fa fa-facebook',
	tags: []
}, {
	title:'Postgres',
	description:'SQL database of choice.  Open to change.',
	icon: 'postgresql-512.png',
	score:4
}]

export default ( {isOpen, layer, index, selectedLayer, setSelectedLayer} ) => {

	return (
		<motion.div 
                  key={layer.id} 
                  id={layer.id} 
                  className={`${styles.Layer} ${isOpen ? styles.Open: styles.Closed }`}
                  isOpen={isOpen} 
                  style={{
                    ...layer.style,
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

                </motion.div>
                )
}