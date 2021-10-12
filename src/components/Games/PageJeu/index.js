import React from 'react';
import './style.scss';
import Track from '../Track';

const PageJeu = ({ setOpenGame }) => {
  return (
		<div className="pageJeu">
			<div className="pageJeu-header"><span onClick={()=>setOpenGame(false)}>&#xD7;</span></div>
			<div className="pageJeu-screen">
				<Track />
			</div>
		</div>

  );
}

export default PageJeu;