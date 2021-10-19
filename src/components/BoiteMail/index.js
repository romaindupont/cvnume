import React from 'react';
import './style.scss';
import LeftMenu from './LeftMenu';
import MailHeader from './MailHeader';
import Message from './Message';
import ViewSmallMessage from './ViewSmallMessage';
import ActionMessage from './ActionMessage';

const BoiteMail = ({openPageMail}) => {
  return (
		<>
		<div className={`mail_intro ${openPageMail}`}>
			<div className="cube">			
				<div className="cube__face cube__face--front"><span>@</span></div>
				<div className="cube__face cube__face--right"></div>
				<div className="cube__face cube__face--back"></div>
				<div className="cube__face cube__face--left"></div>
				<div className="cube__face cube__face--top"></div>
				<div className="cube__face cube__face--bottom"></div>
			</div>
			<MailHeader />
			<div className="mailBox">
				<LeftMenu />
				<ActionMessage />
				<ViewSmallMessage />
				<Message />
			</div>
		</div>
		</>
  );
}

export default BoiteMail;