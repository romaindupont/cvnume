import React from 'react';
import './style.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendrier = () => {
  return (
		<div className="calendrier">
			<Calendar />
		</div>
  );
}

export default Calendrier;