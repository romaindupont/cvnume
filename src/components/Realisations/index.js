import React from 'react';
import './style.scss';


const Realisations = () => {
	
	const wheelCarrousel = (e) => {
		const main = document.querySelector( '.realisations-carrousel' );
		main.scrollLeft += e.deltaY;
		const main1 = document.querySelector( '.realisations-carrousel1' );
		main1.scrollLeft += e.deltaY-90

	}
	const scrollCarrousel = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-carrousel");
		const liElement = ulElement.querySelectorAll(".realisations-item");
		menuList.push(liElement)
		liElement.forEach((items) => items.classList.remove("appear") & items.classList.remove("up"))
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 560 /2 ) / 560)
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("appear");
			const yourListItemUp = document.querySelector(".appear").previousElementSibling;
			yourListItemUp.classList.add("up");
			const appear = document.querySelector('.appear');
			appear.style.transition = "opacity 1s ease-in";
			const enfant12 = document.querySelector('.wrapper');
			enfant12.style.overflowY = "hidden";
			/* console.log(itemsScrolled) */
			if (itemsScrolled === 5) {
				document.getElementById('section2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
			}
			}
		 
	}
	const scrollCarrouselR = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-carrousel1");
		const liElement = ulElement.querySelectorAll(".realisations-item");
		menuList.push(liElement)
			
		liElement.forEach((items) => items.classList.remove("appear") & items.classList.remove("up"))
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 680 /2 ) / 680)
		console.log(e.target.scrollLeft)
		/* console.log(itemsScrolled-(itemsScrolled-1)) */
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("appear");
			const yourListItemUp = document.querySelector(".appear").previousElementSibling;
			yourListItemUp.classList.add("up");
			const appear = document.querySelector('.appear');
			appear.style.transition = "opacity 1s ease-in";
			/* console.log(itemsScrolled) */
			if (itemsScrolled === 5) {
			/* 	document.getElementById('section3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }) */
			}
			}
		 
	}
  return (
		<div className="realisations">
				<main className="wrapper">
				<section className="section static" id="section1">
					<div className="realisations-carrousel" onWheel={wheelCarrousel} onScroll={scrollCarrousel}
					>
						<ul className="realisations-list" >
								<li className="realisations-item">0</li>
								<li className="realisations-item">1</li>
								<li className="realisations-item">2</li>
								<li className="realisations-item">3</li>
								<li className="realisations-item">4</li>
								<li className="realisations-item" onClick={()=>document.getElementById('section2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>0</li>
						</ul>
					</div>
				</section>
					<section className="section parallax" id="section2">
					<div className="realisations-carrousel1"  onWheel={wheelCarrousel} onScroll={scrollCarrouselR}
					>
						<ul className="realisations-list-1" >
								<li className="realisations-item" onClick={()=>document.getElementById('section1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>0</li>
								<li className="realisations-item">1</li>
								<li className="realisations-item">2</li>
								<li className="realisations-item">3</li>
								<li className="realisations-item">4</li>
								<li className="realisations-item">0</li>
						</ul>
						</div>
					</section>
					<section className="section static" id="section3">

					</section>
					<section className="section parallax"></section>
					<section className="section static"></section>
					<section className="section parallax"></section>
					<section className="section static"></section>
			</main>
			</div>
  );
}

export default Realisations;