import styles from '../styles/PageLoader.module.css';


import {motion, AnimatePresence} from 'framer-motion';

export default ( {show} ) => {
	if(show) return (	
		<motion.div
			id={`page-loader`}
			initial={{ opacity: 0 , transition: {
				duration:1
			}}}
		    animate={{ opacity: 1 }}
		    exit={{ opacity: 0, transition: {
		    	duration:1
		    } }}
			>

			<div className={styles.root}>
				
				<span style={{
					fontFamily: 'Dancing Script',
					fontSize:'8rem'
				}}>SH</span>

			      <div className={styles.spinner}>
			        <div className={styles.bounce1}></div>
			        <div className={styles.bounce2}></div>
			        <div className={styles.bounce3}></div>
			      </div>

			</div>

			</motion.div>
	)
	return null
}