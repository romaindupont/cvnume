import React, {useState} from 'react';
import './style.scss';
import LeftMenu from './LeftMenu';
import MailHeader from '../../containers/BoiteMail/MailHeader';
import Message from '../../containers/BoiteMail/Message';
import ViewSmallMessage from '../../containers/BoiteMail/ViewSmallMessage';
import ActionMessage from '../../containers/BoiteMail/ActionMessage';
import NouveauMessage from '../../containers/BoiteMail/NouveauMessage';
import Calendrier from './Calendrier';
import Contact from './Contact';


const BoiteMail = ({openPageMail}) => {
	const [ openMessage, setOpenMessage ] = useState(false);
	const [ newMessage, setNewMessage ] = useState(false);
	const [ page, setPage ] = useState('email');
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
				<LeftMenu setPage={setPage} />
				{page==='email' && (<>
				<ActionMessage setOpenMessage={setOpenMessage} setNewMessage={setNewMessage}/>
				<ViewSmallMessage setOpenMessage={setOpenMessage} setNewMessage={setNewMessage} />
				{openMessage && (<Message />)}
				{newMessage && (<NouveauMessage />)}</>)}
				{page === 'calendrier' && (<Calendrier /> 
				)}
				{page === 'me' && (<>
				</>)}
				{page === 'contact' && (<Contact />
				)}
				{page === 'settings' && (<>
				</>)}
			</div>
		</div>
		</>
  );
}

export default BoiteMail;