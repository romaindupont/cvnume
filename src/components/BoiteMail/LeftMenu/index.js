import React from 'react';
import './style.scss';
import Calendrier from '../../../assets/img/calendar-alt-regular.svg';
import Me from '../../../assets/img/user-regular.svg';
import Contact from '../../../assets/img/address-book-regular.svg';
import Email from '../../../assets/img/envelope-regular.svg';
import Settings from '../../../assets/img/cog-solid.svg';

const LeftMenu = () => {
  return (
		<div className="mailBox-leftMenu">
			<div className="mailBox-leftMenu--calendar"><img src={Calendrier} alt="calendrier" /></div>
			<div className="mailBox-leftMenu--me"><img src={Me} alt="calendrier" /></div>
			<div className="mailBox-leftMenu--contact"><img src={Contact} alt="calendrier" /></div>
			<div className="mailBox-leftMenu--email"><img src={Email} alt="calendrier" /></div>
			<div className="mailBox-leftMenu--settings"><img src={Settings} alt="calendrier" /></div>
		</div>
  );
}

export default LeftMenu;