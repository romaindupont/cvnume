import React, { useEffect } from 'react';
import './style.scss';


const MenuGame = () => {
	const keyPresss = (e) => {
		const menuList = [];
		const liElement = document.querySelectorAll(".menuGame-li");
		menuList.push(liElement)
		if (e.keyCode === 38) {
			liElement.forEach((items) => items.classList.remove("selectionJeu"))
			const pyramid = document.querySelector('.pyramid');
			pyramid.remove()
			menuList[0][0].classList.add("selectionJeu");
			const newDiv = document.createElement("div");
			newDiv.classList.add('pyramid');
			menuList[0][0].appendChild(newDiv)
		}
		if (e.keyCode === 40) {
			liElement.forEach((items) => items.classList.remove("selectionJeu"))
			const pyramid = document.querySelector('.pyramid');
			pyramid.remove()
			menuList[0][1].classList.add("selectionJeu");
			const newDiv = document.createElement("div");
			newDiv.classList.add('pyramid');
			menuList[0][1].appendChild(newDiv)
		}
		console.log(e.keyCode)

	}
	useEffect(() => {
		document.addEventListener("keydown", (e) => keyPresss(e));
  });
  return (
		<>
		<div className="menuGame">
			<ul className="menuGame-ul" id="list">
				<li className="menuGame-li selectionJeu">
					Roll & Field <div className="pyramid"></div>
				</li>
				<li className="menuGame-li">Jumping</li>
			</ul>
		</div>
	</>
  );
}

export default MenuGame;