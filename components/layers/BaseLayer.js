import {motion, AnimatePresence} from 'framer-motion';
import { Media } from 'react-breakpoints'
import Image from "next/image";

import styles from '../../styles/BaseLayer.module.css'

import Statement from '../Statement';
import experiences from '../../data/experiences';
import accomplishments from '../../data/accomplishments';


export default ({isOpen, isMobile}) => (
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

				<span className={styles.titleHeader}>scotthorlacher.dev</span>
				<Media>
			        {({ breakpoints, currentBreakpoint }) =>
			          breakpoints[currentBreakpoint] > breakpoints.tablet ?
					    <div className={styles.biographicalInfoWide}>
							<h4>Fullstack Developer</h4>
							<i className="fa fa-circle"/>
							<h4>Inventor</h4>
							<i className="fa fa-circle"/>
							<h4>Itenerant Techie</h4>
						</div> :
			          <>
			          </>
			        }
			    </Media>
				<div>
					<a className={`${styles.socialButton} fa fa-linkedin`} href="https://www.linkedin.com/in/scott-horlacher-0b5607164" target="_blank"></a>
					<a className={`${styles.socialButton} fa fa-github`} href="https://github.com/nacmonad" target="_blank"></a>
				</div>
			</motion.div>

			<motion.div
				className={styles.titleUnderline}
				transition={{ delay: 0.2}}
				initial={{ opacity: 0 , 
					x: '-100vw',
					padding: '0.06125rem'
					}}
				animate={{ opacity: 1, x:0, padding: '0.06125rem' }}
				exit={{ opacity: 0 }}>
			</motion.div>

			<div className={`grid grid-cols-1 md:grid-cols-3 gap-2`}>
				<div id="col-1" className={`flex flex-col items-center col-span-1 `}>
					<div className={`mt-4`}>
						<div className={`${styles.avatarWrapper} `}>
							<Image
								className={styles.avatarImage}
								src={`/qr/scotthorlacher.dev.stylized2.png`}
								width={256}
								height={256}
								alt={"QR Avatar"}
							/>
							<div className={styles.avatarOverlay}>
								<Image
									src={`/scotty0_cropped.png`}
									height={256}
									width={256}
									alt="Second Image"
								/>
							</div>
						</div>
					</div>
					<div className={`relative -left-2`}>
						<h3 className={`${styles.headline} text-white`}>SCOTT HORLACHER</h3>
						<div className={styles.locationRow}>
							<i className={`${styles.detailButton} fa fa-map-marker`}/>
							<span>Vancouver, British Columbia</span>
						</div>
					</div>
				</div>

				<motion.div
					id="col-2"
					className={`col-span-1 md:col-span-2 pt-2`}
					transition={{ delay: 0.2}}
					initial={{ opacity: 0 , 
						
						}}
					    animate={{ opacity: 1 }}
					    exit={{ opacity: 0 }}>
					<Statement/>
				</motion.div>

			</div>

			<div className={`${styles.contentRow} mt-4`}>
				<div className={styles.contentCol}>
					<h3 className={styles.headline}>EXPERIENCE</h3>

					<motion.div
						className={styles.titleUnderline}
						transition={{ delay: 0.2}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</motion.div>
					

					<ul className={styles.uList}>
					{
						experiences.map(exp=>(
							<li key={exp.id}>
								<div className={styles.experienceRow}>
									{exp.href ? <a href={exp.href} target="_blank" className={styles.experienceCorp}>{exp.title}</a> : <span className={styles.experienceCorp}>{exp.title}</span>}
									
									<span className={styles.experienceTime}>
										<i className={`${styles.detailButton} fa fa-calendar`}/>
										{exp.duration}</span>
								</div>
								<div className={styles.experienceDescription}>
									{exp.description}
								</div>
							</li>
							))
					}
						
					</ul>
				</div>

				<div className={styles.contentCol}>
					<h3 className={styles.headline}>ACCOMPLISHMENTS</h3>

					<motion.div
						className={styles.titleUnderline}
						transition={{ delay: 0.2}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</motion.div>
					<ul className={styles.uList}>
						{
							accomplishments.map(exp=>(
							<li key={exp.id}>
								<div className={styles.experienceRow}>
									{ exp.href ? <a href={exp.href} target="_blank" className={styles.experienceCorp}>{exp.title}</a>: <span className={styles.experienceCorp}>{exp.title}</span>}
									<span className={styles.experienceTime}>
										<i className={`${styles.detailButton} fa fa-calendar`}/>
										{exp.duration}</span>
								</div>
								<div className={styles.experienceDescription}>
									{exp.description}
								</div>
							</li>
							))
						}
					</ul>
				</div>

			</div>

			<div style={{
                      height:'6rem',
                      width:0
                    }}/>
		</div>)}
		


		{!isOpen && (<div></div>)}
	
	
	</AnimatePresence>)