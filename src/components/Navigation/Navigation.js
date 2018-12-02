import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style ={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick={() => onRouteChange } className='pointer link'>Sign Out</p>
		</nav>
		);
}

export default Navigation;