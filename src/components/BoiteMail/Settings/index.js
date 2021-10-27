import React from 'react';
import './style.scss';

const Settings = ({setTheme}) => {
	const handleTheme = (e) => {
		if (e.target.control.checked === true) {
			setTheme('dark');
		}
		if (e.target.control.checked === false) {
			setTheme('light');
		}
	}
  return (
		<div className="settings">
			<div className="settings-label">Appereance</div>
			<div className="checkboxWrapper">
      <input type="checkbox" defaultChecked id="myCheckbox" />
      <label htmlFor="myCheckbox" onClick={handleTheme} aria-hidden="true">
					<div type="text" className="checkmark" />
					<div type="text" className="cross" />
      </label>
    </div>
		</div>
  );
}

export default Settings;