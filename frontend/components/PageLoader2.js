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

				<svg width="8rem" height="2rem">
					<g>
						<motion.circle cx={"1.5rem"} cy={"1rem"} fill="red"
							initial={{
								r:0
							}}
							animate={{
								r:16
							}}
							transition={{
								duration:1,
								repeat:"loop",
								r: { type:"Spring", stiffness: 10}

							}}
						/>
						<motion.circle cx={"4rem"} cy={"1rem"} fill="green"
						initial={{
								r:0
							}}
						animate={{
							r:16
						}}
						transition={{
							r: { type:"Spring", stiffness: 10},
							repeat:"Infinity",
							duration:1,
							delay:0.2


						}}/>
						<motion.circle cx={"6.5rem"} cy={"1rem"} fill="blue"
							initial={{
									r:0
								}}
								animate={{
									r:16
								}}
								transition={{
									r: { type:"Spring", stiffness: 10},
									repeat:"Infinity",
									duration:1,
									delay:0.2

								}}/>
					</g>
				</svg>
			</div>

			</motion.div>
	)
	return null
}