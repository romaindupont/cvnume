import React from 'react';
import './style.scss';


const Realisations = () => {
	
	const wheelCarrousel = (e) => {
		const main = document.querySelector( '.realisations-carrousel' );
		main.scrollLeft += e.deltaY
	}
	const wheelCarrousel1 = (e) => {
		const main = document.querySelector( '.realisations-carrousel1' );
		main.scrollLeft += e.deltaY

	}
	const scrollCarrousel = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".list-1");
		const liElement = ulElement.querySelectorAll(".realisations-item");
		menuList.push(liElement)
	/* 	console.log(menuList) */
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
			console.log(itemsScrolled)
			if (itemsScrolled == 5) {
				setTimeout(function(){ 
					const list1 = document.querySelector('.list-1');
					list1.style.display="none"
					const list2 = document.querySelector('.list-2');
					/* list2.style.position = "absolute" */
				/* 	const enfant12 = document.querySelector('.realisations-list');
					enfant12.style.overflowY = "scroll"; */
				}, 2000)
			}
		/* 	if (itemsScrolled == 5 && e.deltaY == -100) {
				setTimeout(function(){ 
					const list1 = document.querySelector('.list-1');
					list1.style.display="flex"
					const list2 = document.querySelector('.list-2');
					list2.style.display = "none"
				}, 2000) */
			/* } */
			/* if (itemsScrolled == 5) {
				const list1 = document.querySelector('.list-1');
				/* const liElement1 = list1.querySelectorAll(".realisations-item");
				liElement1.forEach((items) => items.classList.remove("appear") & items.classList.remove("up")) */
			/* 	list1.style.opacity = "0"
				list1.style.display="none"
				const menuList = [];
				const list2 = document.querySelector('.list-2');
				const liElement = list2.querySelectorAll(".realisations-item");
				menuList.push(liElement)
				liElement.forEach((items) => items.classList.remove("appear") & items.classList.remove("up"))
				if (itemsScrolled < menuList[0].length) {
					menuList[0][itemsScrolled-1].classList.add("appear");
					const yourListItemUp = document.querySelector(".appear").previousElementSibling;
					yourListItemUp.classList.add("up");
					const appear = document.querySelector('.appear');
					appear.style.transition = "opacity 1s ease-in";
				} */
				/* setTimeout(function(){ 
					const enfant12 = document.querySelector('.realisations-item:nth-child(12)');
					enfant12.style.transform = "translate(10px, -410px)";
				
				}, 2000) */
				
		/* 	} */
		/* 	if(itemsScrolled == 4) {
				
				
				setTimeout(function(){ 
					const enfant12 = document.querySelector('.realisations-item:nth-child(12)');
					enfant12.style.transform = "translate(10px, 10px)";
				
				}, 2000)
				
			}
			if(itemsScrolled == 5) {
				
				
				setTimeout(function(){ 
					const enfant12 = document.querySelector('.realisations-item:nth-child(12)');
					enfant12.style.transform = "translate(10px, -410px)";
				
				}, 2000)
				
			} */
			/* yourListItemUp.style.transition = "opacity 10s ease-out"; */
		}
		 
	}
/* 	useEffect(() => {
    wheelCarrousel();
  }, []); */
  return (
		<div className="realisations">
			<div className="realisations-carrousel" onWheel={wheelCarrousel} onScroll={scrollCarrousel}>
				<ul className="realisations-list" >
					<div className="list-1">
					<li className="realisations-item">0</li>
					<li className="realisations-item">1</li>
					<li className="realisations-item">2</li>
					<li className="realisations-item">3</li>
					<li className="realisations-item">4</li>
					<li className="realisations-item">0</li>
					</div>
					<div className="list-2">
					<li className="realisations-item">0</li>
					<li className="realisations-item">1</li>
					<li className="realisations-item">2</li>
					<li className="realisations-item">3</li>
					<li className="realisations-item">4</li>
					<li className="realisations-item">0</li>
					</div>
				</ul>
			</div>
{/* 			<div className="realisations-carrousel1" onWheel={wheelCarrousel1} onScroll={scrollCarrousel}>
				<ul className="realisations-list" >
					<li className="realisations-item">0</li>
					<li className="realisations-item">1</li>
					<li className="realisations-item">2</li>
					<li className="realisations-item">3</li>
					<li className="realisations-item">4</li>
					<li className="realisations-item">0</li>
				</ul>
			</div> */}
		</div>
  );
}

export default Realisations;