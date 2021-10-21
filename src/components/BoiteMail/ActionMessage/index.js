import React, {useState} from 'react';
import './style.scss';
import Inbox from '../../../assets/img/inbox-solid.svg';
import PaperPlane from '../../../assets/img/paper-plane-regular.svg';
import Trash from '../../../assets/img/trash-alt-regular.svg';
import classNames from 'classnames';

const ActionMessage = ({changeCategory, setNewMessage, setOpenMessage}) => {
	const [ openBox, setOpenBox ] = useState(false);
	const clicAction = (e) => {
		const actualSpan = document.querySelector('.selectionAction');
		if (actualSpan === null) {
			
		}
		else {
			actualSpan.remove();
			if (e.target.className === "actionMessage-inbox") {		
				const inbox = document.querySelector('.actionMessage-inbox')
				const newSpan = document.createElement('span');
				newSpan.classList.add('selectionAction');
				inbox.appendChild(newSpan);
				changeCategory('inbox')
			}
		if (e.target.className === "actionMessage-sent") {
			const inbox = document.querySelector('.actionMessage-sent')
			const newSpan = document.createElement('span');
			newSpan.classList.add('selectionAction');
			inbox.appendChild(newSpan);
			changeCategory('send')
		}
		if (e.target.className === "actionMessage-trash") {
			const inbox = document.querySelector('.actionMessage-trash')
			const newSpan = document.createElement('span');
			newSpan.classList.add('selectionAction');
			inbox.appendChild(newSpan);
			changeCategory('trash')
	
		}

		}
}
  return (
		<div className="mailBox-actionMessage">
			<div className="actionMessage-moncompte">
				<p className="actionMessage-moncompte-email" onClick={()=>setOpenBox(!openBox)}>rdt.romaindupont@gmail.com</p>
				<span className={classNames("actionMessage-moncompte--change", {"actionMessage-moncompte--open":openBox})} onClick={()=>setOpenBox(false)}>Connecter un autre compte ...</span>
			</div>
			<div className="actionMessage-new" onClick={()=>setOpenMessage(false) && setNewMessage(true)}>Nouveau Message</div>
			<div className="actionMessage-inbox" onClick={clicAction}>
				<img src={Inbox} alt="inbox" className="actionMessage-image"/>Inbox<span className="selectionAction"></span>
			</div>
			<div className="actionMessage-sent" onClick={clicAction}>
				<img src={PaperPlane} alt="sending" className="actionMessage-image"/>Send
			</div>
			<div className="actionMessage-trash" onClick={clicAction}>
				<img src={Trash} alt="trash" className="actionMessage-image"/>Trash
			</div>
		</div>
  );
}

export default ActionMessage;