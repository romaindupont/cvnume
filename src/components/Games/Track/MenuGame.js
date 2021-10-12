import React, { useEffect } from 'react';
import './style.scss';


const MenuGame = () => {
/* 	const keyPresss = (e) => {
		

	} */
/* useEffect = () => {

} */
  return (
		<>
		<div className="menuGame" >
			<ul className="menuGame-ul" id="list">
				<li className="menuGame-li selectionJeu"><div className="pyramid"></div>
					Roll & Field
				</li>
				<li className="menuGame-li">Jumping</li>
			</ul>
		</div>
	</>
  );
}

export default MenuGame;