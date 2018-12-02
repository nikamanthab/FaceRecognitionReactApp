import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange,onButtonClick }) => {
	return (
		 <div>
		 	<p>
		 		{`Dectect the faces with url of images`}
		 	</p>
		 	<div className='center'>
		 		<div className='center backpattern pa4 br3 shadow-2'>	
			 		<input 
				 		className="w-70 ph5 br3" type="text" 
				 		onChange={onInputChange}
				 	/>
			 		<button 
				 		className="br3 ph4 dig grow"
				 		onClick ={onButtonClick}>
				 			Detect
			 		</button>
			 		{/*<button className='Button w-30 white grow link shadow-2 bg-light-purple dib'>detect</button>*/}
			 	</div>
		 	</div>
		 	

		 </div>
		);
}

export default ImageLinkForm;