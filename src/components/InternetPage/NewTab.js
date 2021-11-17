import React from 'react';
import './style.scss';

const NewTab = ({ websitePage }) => {
	return (
	<div className="website">
		<iframe title="this is a real website" src={websitePage} frameborder="0"></iframe>
	</div>
	);
}

export default NewTab;