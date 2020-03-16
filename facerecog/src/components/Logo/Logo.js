import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt shadow-2" options={{ max : 75 }} style={{ height: 120, width: 120 }} >
		 		<div className="Tilt-inner pa3 "> 
		 			<img src={brain} alt='logo'
		 		/>
		 		</div>
			</Tilt>
		</div>
	);
}

export default Logo;