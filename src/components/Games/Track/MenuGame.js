import React, { useEffect, useState } from 'react';
import './style.scss';
import FootGame from '../../../containers/Games/FootGame';


const MenuGame = () => {
	const [ gameChoice, setGameChoice ] = useState(0);
	const keyPresss = (e) => {
		const menuList = [];
		const liElement = document.querySelectorAll(".menuGame-li");
		menuList.push(liElement);
		if (e.keyCode === 38) {
			liElement.forEach((items) => items.classList.remove("selectionJeu"));
			const pyramid = document.querySelector('.pyramid');
			pyramid.remove();
			menuList[0][0].classList.add("selectionJeu");
			const newDiv = document.createElement("div");
			newDiv.classList.add('pyramid');
			menuList[0][0].appendChild(newDiv);
		}
		if (e.keyCode === 40) {
			liElement.forEach((items) => items.classList.remove("selectionJeu"));
			const pyramid = document.querySelector('.pyramid');
			pyramid.remove();
			menuList[0][1].classList.add("selectionJeu");
			const newDiv = document.createElement("div");
			newDiv.classList.add('pyramid');
			menuList[0][1].appendChild(newDiv);
		}
		if (e.keyCode === 13) {
			const selectGame = document.querySelector('.selectionJeu').id;
			if (parseInt(selectGame) === 2) {
				const removeMenu = document.querySelector('.menuGame');
				removeMenu.style.display="none";
				setGameChoice(2);
			}
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", (e) => keyPresss(e));
  });
  return (
		<>
		<div className="menuGame">
			<ul className="menuGame-ul" id="list">
				<li className="menuGame-li selectionJeu" id="1">
					Roll & Field <div className="pyramid"></div>
				</li>
				<li className="menuGame-li" id="2">Jumping</li>
			</ul>
		</div>
		{gameChoice === 2 ? <FootGame /> : <div>A venir</div>}
	</>
  );
}

export default MenuGame;