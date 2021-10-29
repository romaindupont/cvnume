import React from 'react';
import './style.scss';


const Realisations = () => {
	
	const wheelCarrousel = (e) => {
		const main = document.querySelector( '.realisations-carrousel' );
		main.scrollLeft += e.deltaY
	}
	const scrollCarrousel = (e) => {
		const menuList = [];
		const liElement = document.querySelectorAll(".realisations-item");
		menuList.push(liElement)
		liElement.forEach((items) => items.classList.remove("appear") & items.classList.remove("up"))
		/* if (e.deltaY > 0) { */
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 560 /2 ) / 560)
/* 		console.log(itemsScrolled) */
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("appear");
/* 			const yourListItem = document.querySelector("li.appear + li");
			yourListItem.classList.add("down"); */
			const yourListItemUp = document.querySelector(".appear").previousElementSibling;
			yourListItemUp.classList.add("up");
			const appear = document.querySelector('.appear');
			appear.style.transition = "opacity 1s ease-in";
			/* yourListItemUp.style.transition = "opacity 10s ease-out"; */
		}
		 
		/* let itemsScrolled = Math.ceil((e.target.scrollLeft + e.deltaY + 400 /2 ) / 400) */
		
		/* if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("activation"); */
/* 			const choixDiplome = listDiplomes.find((diplome) => diplome.id === itemsScrolled)
			const InfosTitre = document.querySelector('.diplomes-titre');
			InfosTitre.textContent= choixDiplome.Titre
			const InfosDate = document.querySelector('.diplomes-date');
			InfosDate.textContent= choixDiplome.date
			const InfosContenu = document.querySelector('.diplomes-contenu');
			InfosContenu.textContent= choixDiplome.contenu */
		/* } */
	}
/* 	useEffect(() => {
    wheelCarrousel();
  }, []); */
  return (
		<div className="realisations">
			<div className="realisations-carrousel" onWheel={wheelCarrousel} onScroll={scrollCarrousel}>
				<ul className="realisations-list" >
				<li className="realisations-item">0</li>
					<li className="realisations-item">1</li>
					<li className="realisations-item">2</li>
					<li className="realisations-item">3</li>
					<li className="realisations-item">4</li>
					<li className="realisations-item">0</li>
				</ul>
			</div>
		</div>
  );
}

export default Realisations;