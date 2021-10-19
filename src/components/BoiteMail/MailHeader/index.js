import React from 'react';
import './style.scss';


const MailHeader = () => {
  return (
		<div className="mailHeader">
			<div className="mailHeader-image"><span className="mailHeader-image--connect"></span></div>
			<span className="mailHeader-close">
					<span className="mailHeader-close--1"></span>
					<span className="mailHeader-close--2"></span>
				</span>
		</div>
  );
}

export default MailHeader;