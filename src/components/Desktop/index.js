import React, { useState } from 'react';
import './style.scss';
import Param from './Param';

const Desktop = ({ theme }) => {
	const [ paramOpen, setParamOpen ] = useState(false);
  return (
		<>
		<div className="desktop" onClick={()=>setParamOpen(true)}>
			<span className="desktop-screen"></span>
			<span className="desktop-keyboard"></span>
			<span className="desktop-mouse"></span>
		</div>
		{paramOpen && (<Param setParamOpen={setParamOpen}/>)}
	</>
  );
}

export default Desktop;