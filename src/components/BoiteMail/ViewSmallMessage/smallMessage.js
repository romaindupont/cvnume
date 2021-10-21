import React from 'react';
import './style.scss';

const SmallMessage = ({id, prenom, nom, category, title, date, text, chooseMessage, setOpenMessage, setNewMessage}) => {
	const messageClic = (e) => {
		const actualSpan = document.querySelector('.colorSelect');
		if (actualSpan === null) {
			const selection = document.querySelector(`[data-id='${e.target.getAttribute('data-id')}']`);
			const newSpan = document.createElement('span');
			newSpan.classList.add('colorSelect');
			selection.appendChild(newSpan);
			chooseMessage(parseInt(e.target.getAttribute('data-id')))
			setNewMessage(false)
			setOpenMessage(true)
		}
		else {
			actualSpan.remove();
			const selection = document.querySelector(`[data-id='${e.target.getAttribute('data-id')}']`);
			const newSpan = document.createElement('span');
			newSpan.classList.add('colorSelect');
			selection.appendChild(newSpan);
			chooseMessage(parseInt(e.target.getAttribute('data-id')))
			setNewMessage(false)
			setOpenMessage(true)

		}
	}
  return (
			<div className="viewSmallMessage-smallMessage" onClick={messageClic} data-id={id} data-category={category}>
				<div className="smallMessage-thumbmail" data-id={id}></div>
				<div className="smallMessage-name" data-id={id}>
					<span data-id={id}>{prenom}</span><span data-id={id}>{nom}</span>
				</div>
				<div className="smallMessage-title" data-id={id}>{title}</div>
				<div className="smallMessage-date" data-id={id}>{date}</div>
				<p className="smallMessage-extrait" data-id={id}>{text}</p>
			</div>
  );
}

export default SmallMessage;