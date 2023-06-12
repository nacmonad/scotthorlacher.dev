import styles from '../../styles/PageLoader.module.css';
import {motion, AnimatePresence} from 'framer-motion';

export default ( {show} ) => {
	if(show) return (	
		<motion.div
			id={`page-loader`}
			initial={{ opacity: 0 , transition: {
				duration:0.5
			}}}
		    animate={{ opacity: 1 }}
		    exit={{ opacity: 0, transition: {
		    	duration:0.5
		    } }}
			>

			<div className={styles.root}>
				scotthorlacher.dev
			</div>

			</motion.div>
	)
	return null
}