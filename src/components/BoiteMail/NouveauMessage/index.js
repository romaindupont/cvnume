import React from 'react';
import './style.scss';


const NouveauMessage = () => {
  return (
		<form type="submit" className="Nouveaumessage" >
			<select className="Nouveaumessage-thumbmail">
				<option value="1"><span className="option1"></span></option>	
				<option value="2"><span className="option2"></span></option>
				<option value="3"><span className="option3"></span></option>
				<option value="4"><span className="option4"></span></option>
			</select>		
			<div className="Nouveaumessage-input-adresseMail" >
					<input type="mail" />
			</div>
			<div className="Nouveaumessage-input-cc" >
					
			</div>
			<div className="Nouveaumessage-objet"><input type="text" /></div>
			<div className="Nouveaumessage-message"><textarea name="textMessage" id="votremessage" cols="30" rows="10"></textarea></div>
		</form>
  );
}

export default NouveauMessage;