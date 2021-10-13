import React, { useState } from 'react';
import './style.scss';
import InternetPage from '../../containers/InternetPage';


const InternetLogo = ({ openBig, setOpenBig }) => {
	const OpenInternet = () => {
		setOpenBig('normal');
	}
  return (
		<>
		<div className="internetLogo" onClick={OpenInternet}>
				<span className="w"></span>
		</div>
		{openBig === 'normal' && (
			<InternetPage openBig={openBig} setOpenBig={setOpenBig}/>

		)}
		</>
  );
}

export default InternetLogo;