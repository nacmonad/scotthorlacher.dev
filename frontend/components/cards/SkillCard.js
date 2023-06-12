import styles from "../../styles/SkillCard.module.css";

import { motion } from 'framer-motion';

export default ({ skill, index }) => {
	return (
		<div className={styles.root}>
			<div className={styles.row}>
				{skill.icon && <img className={styles.skillIcon} src={skill.icon}/> }
				<h4>{skill.title}</h4>
				<p className={styles.skillDescription}>{skill.description}</p>
			</div>

			<div className={styles.progressContainer}>

				<motion.div 
					className={styles.progressBar}
					initial={{
						width: 0
					}}
					animate={{
						width: `${skill.score*20}%`,
					}}
					transition={{
						duration: 0.2,
						delay:0.1*index
					}}/>
					

			</div>


		 </div>
		)
}