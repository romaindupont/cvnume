import React from 'react';
import './style.scss';

const NewTab = ({websitePage}) => {
	return (
	<div className="website">
		<iframe src={websitePage} frameborder="0"></iframe>
	</div>
	);
}

export default NewTab;