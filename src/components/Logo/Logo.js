import React from 'react';
import Tilt from 'react-tilt'
import brain from './Logo.png'
import './Logo.css';

const Logo = () => {
	return (
		 <div>
		 	<Tilt className="Tilt shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> <img alt="img not loaded" src={brain}></img> </div>
			</Tilt>
		 </div>
		);
}

export default Logo;