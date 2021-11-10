import React from 'react';
import './style.scss';
import PageChargement from './PageChargement';
import MenuGame from './MenuGame';

const Track = () => {
  return (
		<div className="track" >
			<PageChargement />
			<MenuGame />
		</div>
  );
}

export default Track;