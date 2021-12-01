import React from 'react';
import './style.scss';
import Calendrier from '../../../assets/img/calendar-alt-regular.svg';
import Me from '../../../assets/img/user-regular.svg';
import Contact from '../../../assets/img/address-book-regular.svg';
import Email from '../../../assets/img/envelope-regular.svg';
import Settings from '../../../assets/img/cog-solid.svg';

const LeftMenu = ({ setPage }) => {	
  return (
		<div className="mailBox-leftMenu">
			<div className="mailBox-leftMenu--calendar" onClick={()=>setPage('calendrier')}><img src={Calendrier} alt="calendrier" /></div>
			<div className="mailBox-leftMenu--me" onClick={()=>setPage('me')}><img src={Me} alt="moi" /></div>
			<div className="mailBox-leftMenu--contact" onClick={()=>setPage('contact')}><img src={Contact} alt="contact" /></div>
			<div className="mailBox-leftMenu--email" onClick={()=>setPage('email')}><img src={Email} alt="boiteMail" /></div>
			<div className="mailBox-leftMenu--settings" onClick={()=>setPage('settings')}><img src={Settings} alt="settings" /></div>
		</div>
  );
}

export default LeftMenu;