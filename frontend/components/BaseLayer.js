import {motion, AnimatePresence} from 'framer-motion';
import { Media } from 'react-breakpoints'

import EAMasonry from './EAMasonry';
import styles from '../styles/BaseLayer.module.css'




const experiences = [{
	id:1,
	title: "Sonity Ltd",
	duration: "Sept 2019-Jan 2021",
	description: "Co-founded and developed a suite of marketing automation tools for LinkedIn.  Created UI, API and Selenium scripts.  Ran support and devops for client instances on AWS.",
	image: "Neutral Savannah.png",

}, {
	id:2,
	title: "Artiste QB",
	duration: "March 2018 - Present",
	description: "Researcher and developer producing IP.  See accomplishments.",
	image: "artiste_qb_net.png",
	href:"https://www.artiste-qb.net/"
}, {
	id:3,
	title: "Freelancer",
	duration: "Jan 2016 - Present",
	description: "Continuously learning frameworks and libraries in order to get the job done.  Providing plethora of web development related services -- such as webdesign, hosting, e-commerce.  I also lend my technical services to international contemporary artists in order to help them realize their visions.",
	href: "https://scotthorlacher.dev"
}]
const accomplishments = [{
	id:4,
	title: "System and method for platform to securely distribute compute workload to web capable devices",
	description: "A system and method for distributed computing tasks to a plurality of swarm devices.  In particular, using WebGL and browser canvas to make available the computing resources of any device with a browser.",
	duration:"July 2017",
	href: "https://patents.google.com/patent/US20190098080A1/",
	image: "usp_cropped.png"

}, {
	id:5,
	title: "System and method for shared secret encryption and verification of recordings of meeting proceedings",
	description:"Patent on the process of using proximity based detection of mobile app for Diffie-Hellman symetric key exchange, audio/video meeting recording, followed by encryption with a unique key generated by Shamir's Secret Sharing algorithm.  The result is meeting minutes are recorded and encrypted into a database service and only recoverable given a m-of-n majority of participants.",
	duration:"Oct 2018",
	href: "https://patents.google.com/patent/US20200396079A1",
	image: "usp2_cropped.png"
}, {
	id:6,
	title: "Kineticoin -- Cryptocurrency-art residency @ Ujazdowski",
	duration: "Sept 2018 - Nov 2018",
	description: "Exploring the concept of 'Proof-of-Performance', Kineticoin was an ERC20 issued in the gallery space @ the national museum of contemporary art in Warsaw.  Users would sign in with a wallet, and were tracked with an image-recognition system which would track their performance and subsequently issue KNC tokens. ",
	href: "https://etherscan.io/token/0x87c84a8dc1986ff4254f59dbe0d8f3bcef6faa28",
	image: "scotty_kineticoin.jpg"
}, {
	id:7,
	title: "Perftoran Technical Consultant at Palazzo Lucarini (Italy) and Fotopub (Slovenia).",
	duration: "July 2020-Sept 2020",
	description: "Provided web, security cam, internet and chemical extraction/distillation services for avant-garde international contemporary exhibition.  Aided in production of various bee propolis extracts, soaps and herbal (helicryso) distillates.",
	href:"http://www.palazzolucarini.it/perftoran-_-petr-davydtchenko/",
	image: "methlab_in_trevi.jpg"
}]

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
					}}
				    animate={{ opacity: 1, x:0 }}
				    exit={{ opacity: 0 }}>
			</motion.div>

			<div className={!isMobile ? styles.bioRow : styles.bioRowMobile}>
				<div className={styles.avatarContainer}/>
					<motion.div
						className={styles.rightCol}
						transition={{ delay: 0.2}}
						initial={{ opacity: 0 , 
							
							}}
						    animate={{ opacity: 1 }}
						    exit={{ opacity: 0 }}>
					    <h4>SCOTT HORLACHER</h4>
						<div className={styles.locationRow}>
							<i className={`${styles.detailButton} fa fa-map-marker`}/>
							<span>Vancouver, British Columbia</span>
						</div>
						<p>Hello.  I'm actively searching for new projects and talented teams to work with.  I have been using Javascript frameworks to make webapps for at least 5 years now.  Although my trade is software development, I was formally educated in Electrical Engineering (McMaster) and also enjoy working on IoT projects.  In general, I'm leveraging my skillsets to facilate travel, new experiences and language-learning.  Research-wise, I'm interested in cryptography and blockchain and hold multiple patents pertaining to.
						</p>
					</motion.div>

			</div>

			<div className={styles.contentRow}>
				<div className={styles.contentCol}>
					<h4>EXPERIENCE</h4>

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
					<h4>ACCOMPLISHMENTS</h4>

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