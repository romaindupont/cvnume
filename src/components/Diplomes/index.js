import React from 'react';
import './style.scss';
import DessinDiplome from './DessinDiplome';

const Diplomes = ({listDiplomes}) => {
	console.log(listDiplomes)

	const scrollCarrousel = (e) => {
		const menuList = [];
		const liElement = document.querySelectorAll(".diplomes-item");
		menuList.push(liElement)
		liElement.forEach((items) => items.classList.remove("activation"))
		let itemsScrolled = Math.ceil((e.target.scrollTop + 200 / 2) / 200)
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("activation");
			const choixDiplome = listDiplomes.find((diplome) => diplome.id === itemsScrolled)
			const InfosTitre = document.querySelector('.diplomes-titre');
			InfosTitre.textContent= choixDiplome.Titre
			const InfosDate = document.querySelector('.diplomes-date');
			InfosDate.textContent= choixDiplome.date
			const InfosContenu = document.querySelector('.diplomes-contenu');
			InfosContenu.textContent= choixDiplome.contenu
		}
	}
  return (
		<div className="diplomes">
			<div className="diplomes-carrousel" onScroll={scrollCarrousel}>
				<ul className="diplomes-list">
					<li className="diplomes-item"></li>
					<li className="diplomes-item"><span className="item--diplome"></span><DessinDiplome/> </li>
					<li className="diplomes-item"><span className="item--formation formation-lien"></span></li>
					<li className="diplomes-item"></li>
					<li className="diplomes-item"></li>
					<li className="diplomes-item"></li>
					<li className="diplomes-item"><span className="item--diplome"></span></li>
					<li className="diplomes-item"><span className="item--diplome"></span></li>
					<li className="diplomes-item"><span className="item--diplome"></span></li>
				</ul>
			</div>
			<div className="diplomes-infos">
				<div className="diplomes-titre"></div>
				<div className="diplomes-date"></div>
				<div className="diplomes-contenu"></div>
				
			</div>
		</div>

  );
}

export default Diplomes;