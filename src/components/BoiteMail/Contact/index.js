import React from 'react';
import './style.scss';
import contactData from '../../../data/contact';

const Contact = () => {
	const clicContact = (e) => {
		const contactForm = document.querySelectorAll('.contact-form');
		const contactFormContact = document.querySelectorAll('.contact-form-contact');
		if(e.target.id === 'user1') {
			contactForm[0].classList.toggle('contact-form--open')		
			contactFormContact[0].classList.toggle('contact-form-contact--open')
		}
		if(e.target.id === 'user2') {
			contactForm[1].classList.toggle('contact-form--open')
			contactFormContact[1].classList.toggle('contact-form-contact--open')
		}
		if(e.target.id === 'user3') {
			contactForm[2].classList.toggle('contact-form--open')
			contactFormContact[2].classList.toggle('contact-form-contact--open')
		}
		
		
	}
  return (
		<div className="contact" id="srollbar">
			{contactData.map((user, i) => (
			<div key={i} className="contact-form" id={`user${user.id}`} onClick={clicContact}>
				<div className="contact-form-thumbmail"></div>
				<div className="contact-form-prenom">{user.prenom}</div>
				<div className="contact-form-nom">{user.nom}</div>
				<div className="contact-form-profession">{user.metier}</div>
				<div className="contact-form-contact">
					<div className="contact-form-tel">Tel: <a href={`tel:${user.tel}`}>{user.tel}</a></div>
					<div className="contact-form-mail">Mail: <a href={`mailto:${user.mail}`}>{user.mail}</a></div>
					<div className="contact-form-entreprise">Entreprise: <span>{user.entreprise}</span></div>
					<div className="contact-form-site">Site web: <a href={`https://${user.site}`} target="_blank" rel="noreferrer">{user.site}</a></div>
				</div>
			</div>
			))}
			
		</div>
  );
}

export default Contact;