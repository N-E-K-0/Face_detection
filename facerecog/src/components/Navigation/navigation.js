import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			 <p onClick = { () => onRouteChange('signIn')}
			 	className='f3 link dim black underline pointer padding' 
			 >Sign Out
			 </p>
		</nav>
	);
}

export default Navigation;