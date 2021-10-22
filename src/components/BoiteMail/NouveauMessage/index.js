import React, {useState} from 'react';
import './style.scss';
import classNames from 'classnames';

const NouveauMessage = ({changeValue, sendMessage}) => {
	const [ clicSendMessage, setClicSendMessage ] = useState(false);
	const thumbmailChoose = (e) => {
		const select = document.getElementById('thumb');
		if(e.target.value==1){
			select.style.background = 'red'
		}
		if(e.target.value==2){
			select.style.background = 'blue'
		}
		if(e.target.value==3){
			select.style.background = 'green'
		}
		if(e.target.value==4){
			select.style.background = 'yellow'
		}
	}
	const submitMessage = (e) => {
		e.preventDefault();
		if (e.nativeEvent.path[2][3].value !=='' && e.nativeEvent.path[2][2].value !=='' && e.nativeEvent.path[2][6].value !=='' && e.nativeEvent.path[2][7].value !=='' && e.nativeEvent.path[2][1].value !=='') {
			setClicSendMessage(true)
			const newDate = Date.now();
			const today = new Date(newDate).toLocaleDateString();
			sendMessage(10, e.nativeEvent.path[2][3].value, e.nativeEvent.path[2][2].value, 'send', e.nativeEvent.path[2][6].value, today, e.nativeEvent.path[2][7].value, e.nativeEvent.path[2][1].value);
		}
		
	}
  return (
		<form className="Nouveaumessage" >
			<div className="NouveauMessage-header">
				<select className="Nouveaumessage-thumbmail" id="thumb" onChange={thumbmailChoose}>
					<option value="1"></option>	
					<option value="2"></option>
					<option value="3"></option>
					<option value="4"></option>
				</select>		
				<div className="Nouveaumessage-input-adresseMail" >De
						<input type="mail" name="expediteur" onChange={(e)=>changeValue(e.target.value, e.target.name)}/>
				</div>
				<div className="Nouveaumessage-input-nom" >Nom
						<input type="text" name="nom" onChange={(e)=>changeValue(e.target.value, e.target.name)}/>
				</div>
				<div className="Nouveaumessage-input-prenom" >Prénom
						<input type="text" name="prenom" onChange={(e)=>changeValue(e.target.value, e.target.name)}/>
				</div>
				<div className="Nouveaumessage-input-a" >A
				<input type="mail" defaultValue='rdt.romaindupont@gmail.com' readOnly/>
						</div>
				<div className="Nouveaumessage-input-cc" >CC
					<input type="mail" value='' readOnly/>
				</div>
				<div className="Nouveaumessage-objet">Objet<input type="text" name="objet" onChange={(e)=>changeValue(e.target.value, e.target.name)}/></div>
			</div>
			<div className="Nouveaumessage-message"><textarea name="textMessage" id="votremessage" cols="55" rows="18" placeholder="Votre Message" onChange={(e)=>changeValue(e.target.value, e.target.name)} /></div>
			<button type="submit" className="sendButton" onClick={submitMessage}><span className={classNames("triangleSend1", {"triangleSend1--open":clicSendMessage})}></span><span className={classNames("triangleSend2", {"triangleSend2--open":clicSendMessage})}></span><span className={classNames("ok", {"ok--open":clicSendMessage})}></span></button>
		</form>
  );
}

export default NouveauMessage;