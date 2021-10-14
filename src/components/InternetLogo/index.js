import React from 'react';
import './style.scss';
import InternetPage from '../../containers/InternetPage';


const InternetLogo = ({ openPageInternet, smallPage }) => {
	const OpenInternet = () => {
		smallPage();
	}
  return (
		<>
		<div className="internetLogo" onClick={OpenInternet}>
				<span className="w"></span>
		</div>
		{openPageInternet === 'normal' && (
			<InternetPage />

		)}
		{openPageInternet === 'big' && (
			<InternetPage />

		)}
		</>
  );
}

export default InternetLogo;