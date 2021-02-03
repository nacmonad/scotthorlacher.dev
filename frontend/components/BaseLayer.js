import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/BaseLayer.module.css'

export default ({isOpen}) => (
	<AnimatePresence>
		
		{isOpen && (
		<div className={styles.root}>
			<motion.div 
				className={styles.topRow}
				initial={{ opacity: 0 , transition: {
					duration:1
				}}}
			    animate={{ opacity: 1 }}
			    exit={{ opacity: 0, transition: {
			    	duration:1
			    } }}>

				<h4 className={styles.titleHeader}>scotthorlacher.dev</h4>
				<div>
					<a className={`${styles.socialButton} fa fa-linkedin`} href="https://www.linkedin.com/in/scott-horlacher-0b5607164" target="_blank"></a>
					<a className={`${styles.socialButton} fa fa-github`} href="https://github.com/nacmonad" target="_blank"></a>
				</div>
			</motion.div>

			<motion.div
				className={styles.titleUnderline}
				transition={{ delay: 0.5}}
				initial={{ opacity: 0 , 
					x: '-100vw',
					}}
				    animate={{ opacity: 1, x:0 }}
				    exit={{ opacity: 0 }}>
			</motion.div>
			
			<div className={styles.bioRow}>
				<div className={styles.avatarContainer}>
					avatar
				</div>
				<div className={styles.biographicalInfo}>
					<h4>Fullstack Developer</h4>
					<h4>Inventor</h4>
					<h4>Entrepren</h4>
					<h4>Itenerant Coder</h4>


				</div>
			</div>

			<div className={styles.contentRow}>
				<div className={styles.contentCol}>
					<h4>Experience</h4>

					<motion.div
						className={styles.titleUnderline}
						transition={{ delay: 0.7}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</motion.div>
				</div>
				<div className={styles.contentCol}>
					<h4>Accomplishments</h4>

					<motion.div
						className={styles.titleUnderline}
						transition={{ delay: 0.7}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</motion.div>
				</div>

			</div>

		</div>)}
		


		{!isOpen && (<div></div>)}
	
	
	</AnimatePresence>)