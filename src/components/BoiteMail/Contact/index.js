import React from 'react';
import './style.scss';

const Contact = () => {
  return (
		<div className="contact">
			<div className="contact-form">
				<div className="contact-form-thumbmail"></div>
				<div className="contact-form-prenom">Robert</div>
				<div className="contact-form-nom">Michel</div>
				<div className="contact-form-profession">Designer</div>
				<div className="contact-form-contact">
					<div className="contact-form-tel">tel: <span>02 02 02 02 02</span></div>
					<div className="contact-form-mail">mail: <span>rdrrdd@ddd.fr</span></div>
				</div>
			</div>
		</div>
  );
}

export default Contact;