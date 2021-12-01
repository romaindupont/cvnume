import React from 'react';
import './style.scss';

const Work = ({ informations }) => {
	return (
		<div className="work">
			<p className="work-infos">
				{informations}
			</p>
		</div>
  );
}

export default Work;