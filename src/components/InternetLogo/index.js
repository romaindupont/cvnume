import React, { useState } from 'react';
import './style.scss';
import InternetPage from '../InternetPage';


const InternetLogo = () => {
	const [ internetPageOpen, setInternetPageOpen ] = useState(false)
  return (
		<>
		<div className="internetLogo" onClick={()=>setInternetPageOpen(!internetPageOpen)}>
				<span className="w"></span>
		</div>
		{internetPageOpen && (
			<InternetPage setInternetPageOpen={setInternetPageOpen}/>

		)}
		</>
  );
}

export default InternetLogo;