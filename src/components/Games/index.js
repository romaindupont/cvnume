import React, { useState } from 'react';
import './style.scss';
import PageJeu from './PageJeu';

const Games = () => {
	const [ openGame, setOpenGame ] = useState(false);
  return (
		<>
			<div className="gamesLogo" onClick={() => setOpenGame(true)}>
				<span className="pads-DG"></span>
				<span className="pads-HB"></span>
				<span className="buttonGroupMiddle">
					<span className="select"></span>
					<span className="start"></span>
				</span>
				<span className="buttonA"></span>
				<span className="buttonB"></span>
				<span className="greyline--1"></span>
				<span className="greyline--2"></span>
				<span className="greyline--3"></span>
				<span className="greyline--4"></span>
			</div>
			{openGame && (
				<PageJeu setOpenGame={setOpenGame}/>
			)}
		</>	
  );
}

export default Games;