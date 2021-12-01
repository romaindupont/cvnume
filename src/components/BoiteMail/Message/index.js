import React from 'react';
import './style.scss';

const Message = ({ mail, id }) => {
	const messageSelect = mail.filter((msg) => msg.id === id)
  return (
		<div className="mailBox-message" id="srollbar1">
			<div className="mailBox-message-thumbmail"></div>		
			<div className="mailBox-message-name" >
				<span>{messageSelect[0].prenom}</span><span>{messageSelect[0].nom}</span>
			</div>
			<span className="mailBox-message-adresseMail">&#x3C; {messageSelect[0].mail} &#x3E;</span>
			<div className="mailBox-message-a">A<span>Vous</span></div>
				<div className="mailBox-message-title">{messageSelect[0].title}</div>
				<div className="mailBox-message-date">le {messageSelect[0].date}</div>
				<p className="mailBox-message-paragraph">{messageSelect[0].text}</p>
		</div>
  );
}

export default Message;