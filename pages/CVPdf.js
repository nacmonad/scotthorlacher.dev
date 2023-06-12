//import styles from '../styles/BaseLayer.module.css'

import { renderToStaticMarkup } from 'react-dom/server';

import styles from '../styles/CVPdf.module.css';

import SkillCard from '../components/cards/SkillCard'



const experiences = [{
	id:1,
	title: "Sonity Ltd",
	duration: "Sept 2019-Jan 2021",
	description: "Co-founded and developed a suite of marketing automation tools for LinkedIn.  Created UI/UX, API and Selenium scripts.  Ran support and devops for client instances on AWS.",
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

const skills = [{
	title:'NodeJS',
	description:'API development, sockets, streams, buffers oh my.',
	icon: 'nodejs-icon.svg',
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
	icon: 'data_science.png',
	tags: []
}, {
	title:'Postgres',
	description:'SQL database of choice.  Open to change.',
	icon: 'postgresql-512.png',
	score:4
}]




const CVPdf = () => (
		

		<div className={styles.root}>

			<div 
				className={styles.topRow}
				initial={{ opacity: 0 , transition: {
					duration:1
				}}}
			    animate={{ opacity: 1 }}
			    exit={{ opacity: 0, transition: {
			    	duration:1
			    } }}>

				<span className={styles.titleHeader}>scotthorlacher.dev</span>
				
					    <div >
							<h4>Fullstack Developer</h4>
						</div>
				

				<div>
					shorlacher@gmx.com
				</div>
			</div>


			<div
				className={styles.titleUnderline}
				transition={{ delay: 0.2}}
				initial={{ opacity: 0 , 
					x: '-100vw',
					}}
				    animate={{ opacity: 1, x:0 }}
				    exit={{ opacity: 0 }}/>
			

			<div className={styles.bioRow }>
				<div
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
					<p>Hello.  I'm actively searching for new projects and talented teams to work with.  I have been using Javascript frameworks to make webapps for at least 5 years now.  Although my trade is software development, I was formally educated in Electrical Engineering (McMaster) and also enjoy working on IoT projects.  In general, I'm leveraging my skillsets to facilate travel, new experiences and language-learning.  Research-wise, I'm interested in cryptography and blockchain and hold multiple patents pertaining to.</p>
				</div>

			</div>

			<div className={styles.contentRow}>
				<div className={styles.contentCol}>
					<h4>EXPERIENCE</h4>
					<div
						className={styles.titleUnderline}
						transition={{ delay: 0.2}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</div>
					

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
					<div
						className={styles.titleUnderline}
						transition={{ delay: 0.2}}
						initial={{ opacity: 0 , 
							x: '-100vw',
							}}
						    animate={{ opacity: 1, x:0 }}
						    exit={{ opacity: 0 }}>
					</div>
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
              	<div className={styles.skillsRoot}>
              	<div className={styles.skillsTitle}>
              		<h2>Skills</h2>
              	</div>
              		{
              			skills.map((skill, index)=>(<SkillCard skill={skill} index={index}/>))
              		}
              	</div>
            </div>

		
	
	)

export default CVPdf;