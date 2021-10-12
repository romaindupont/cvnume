import React, { useState } from 'react';
import './style.scss';
import InternetPage from '../InternetPage';


const InternetLogo = ({ openBig, setOpenBig }) => {
	const [ internetPageOpen, setInternetPageOpen ] = useState(false)
	const OpenInternet = () => {
		setInternetPageOpen(!internetPageOpen);
		setOpenBig('normal');
	}
  return (
		<>
		<div className="internetLogo" onClick={OpenInternet}>
				<span className="w"></span>
		</div>
		{internetPageOpen && (
			<InternetPage setInternetPageOpen={setInternetPageOpen} openBig={openBig} setOpenBig={setOpenBig}/>

		)}
		</>
  );
}

export default InternetLogo;