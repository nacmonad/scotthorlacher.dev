import {motion, AnimatePresence} from 'framer-motion';

export default ({isOpen}) => (
	<AnimatePresence>
		
		{isOpen && (<div>opened bawselyer</div>)}
		{!isOpen && (<div>base layer</div>)}
	
	
	</AnimatePresence>)