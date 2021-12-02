import React, {useState} from 'react';
import './style.scss';
import ImageCar from '../../assets/img/spider.png';
import Cursor from '../../assets/img/cursor.png';

const Realisations = ({ setOpenNewTab, openWebsitePage, experiences }) => {
	const [ number, setNumber ] = useState(0);
	const wheelCarrousel1 = (e) => {
		const main2 = document.querySelector('.realisations-carrousel2');
		main2.scrollLeft += e.deltaY;
	}
	const wheelCarrousel2 = (e) => {
		const main2 = document.querySelector('.realisations-carrousel3');
		main2.scrollLeft += e.deltaY;
		if (e.deltaY > 0) {
			if (number === 6) {
				setNumber(5);
				setTimeout(()=>document.getElementById('section5').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }),2000);
			}
			else {
				setNumber(number+1);
				scrollCarrouselCardFoward(e, number);
			}	
		}
		if (e.deltaY < 0) {
			if(number < 1) {
				setNumber(1);
				document.getElementById('section3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
			}
			else {
				setNumber(number-1);
				scrollCarrouselCardBack(e, number);
			}
		}
	}
	const wheelCarrousel = (e) => {
		const main = document.querySelector( '.realisations-carrousel' );
		main.scrollLeft += e.deltaY;
		const main1 = document.querySelector( '.realisations-carrousel1' );
		main1.scrollLeft += e.deltaY-90;
	}
	const scrollCarrousel = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-carrousel");
		const liElement = ulElement.querySelectorAll(".realisations-item");
		menuList.push(liElement);
		liElement.forEach((items) => items.classList.remove("appear") & items.classList.remove("up"));
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 560 /2 ) / 560);
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("appear");
			const yourListItemUp = document.querySelector(".appear").previousElementSibling; 
			yourListItemUp.classList.add("up");
			const appear = document.querySelector('.appear');
			appear.style.transition = "opacity 1s ease-in";
			const enfant12 = document.querySelector('.wrapper-real');
			enfant12.style.overflowY = "hidden";
			if (itemsScrolled === 5) {		
				/* setTimeout(()=>document.getElementById('section2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }),2000) */
			}
		}
	}
	const scrollCarrouselR = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-carrousel1");
		const liElement = ulElement.querySelectorAll(".realisations-item-1");
		menuList.push(liElement);
		liElement.forEach((items) => items.classList.remove("appear1") & items.classList.remove("up1"));
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 600 /2 ) / 600);
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled-1].classList.add("appear1");
			const yourListItemUp = document.querySelector(".appear1").nextElementSibling;
			const appear = document.querySelector('.appear1');
			appear.style.transition = "opacity 1s ease-in";
			yourListItemUp.classList.add("up1");
			if (itemsScrolled === 5) {
				/* setTimeout(()=>document.getElementById('section3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }),2000); */
			}
		}		 
	}
	const scrollCarrouselL = (e) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-list-2");
		const liElement = ulElement.querySelectorAll(".realisations-item-2");
		menuList.push(liElement);
		liElement.forEach((items) => items.classList.remove("appear2") & items.classList.remove("up2"));
		let itemsScrolled = Math.ceil(((e.target.scrollLeft) + 560 /2 ) / 560);
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("appear2");
			const yourListItemUp = document.querySelector(".appear2").previousElementSibling;
			yourListItemUp.classList.add("up2");
			const appear = document.querySelector('.appear2');
			appear.style.transition = "opacity 1s ease-in";
			if (itemsScrolled === 5) {
				/* setTimeout(()=>document.getElementById('section4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }),2000); */
			}
		}
		 
	}
	const scrollCarrouselCardFoward = (e, number) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-list-3");
		const liElement = ulElement.querySelectorAll(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity=1;
		menuList[0][number].style.transition= 'bottom 1s ease-in 0s';
		menuList[0][number].style.bottom='200px';
		 
	}
	const scrollCarrouselCardBack = (e, number) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-list-3");
		const liElement = ulElement.querySelectorAll(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity=0;
		menuList[0][number].style.transition= 'bottom 1s ease-in 0s';
		menuList[0][number].style.bottom='-150px';
	}
	const imageAppear = () => {
		const rea = document.querySelector('.realisations-list');
		rea.style.cursor = `url(${Cursor}),pointer`;
		const image = document.createElement('IMG');
		image.setAttribute('src', ImageCar);
		image.className = 'imageCar';
		image.style.position = 'absolute';
		image.style.top=`300px`;
		image.style.left=`0px`;
		rea.append(image);
	}
	const imageDisappear = () => {
		const image = document.querySelector('.imageCar');
		image.remove();
	}
  return (
		<div className="realisations">
			<main className="wrapper-real">
				<section className="section-real static-real" id="section1">
					<div className="realisations-carrousel" onWheel={wheelCarrousel} onScroll={scrollCarrousel}>
						<ul className="realisations-list" >
							<li className="realisations-item">
								<span className="realisations-item--nom" onMouseEnter={imageAppear} onMouseLeave={imageDisappear}>{experiences[0].nom}</span><br></br>
								<span className="realisations-item--description">{experiences[0].description}</span><br></br>
								<span className="realisations-item--techno">{experiences[0].techno}</span><br></br>
								<a className="realisations-item--githubLink" target="_blank" rel="noreferrer" href={experiences[0].githubLink}>{experiences[0].githubLink}</a><br></br>
								<span className="realisationFleche"></span>
							</li>
							<li className="realisations-item">1</li>
							<li className="realisations-item">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/9D0aWXNdKWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</li>
							<li className="realisations-item">3</li>
							<li className="realisations-item" onClick={()=>setOpenNewTab(true) & openWebsitePage('https://dangerous-tank.surge.sh')}>website live</li>
							<li className="realisations-item" onClick={()=>document.getElementById('section2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}><span className="clicDown"><span className="clicDown--1"></span><span className="clicDown--2"></span></span></li>
						</ul>
					</div>
				</section>
				<section className="section-real parallax-real" id="section2">
					<div className="realisations-carrousel1" onWheel={wheelCarrousel} onScroll={scrollCarrouselR}>
						<ul className="realisations-list-1" >
							<li className="realisations-item-1" onClick={()=>document.getElementById('section1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>0</li>
							<li className="realisations-item-1">1</li>
							<li className="realisations-item-1">2</li>
							<li className="realisations-item-1">3</li>
							<li className="realisations-item-1"onClick={()=>setOpenNewTab(true) & openWebsitePage('https://fast-volleyball.surge.sh')}>website live</li>
							<li className="realisations-item-1" onClick={()=>document.getElementById('section3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}><span className="clicDown"><span className="clicDown--1"></span><span className="clicDown--2"></span></span></li>
						</ul>
					</div>
				</section>
				<section className="section-real static-real" id="section3">
					<div className="realisations-carrousel2" onWheel={wheelCarrousel1} onScroll={scrollCarrouselL}>
						<ul className="realisations-list-2" >
							<li className="realisations-item-2">0</li>
							<li className="realisations-item-2">1</li>
							<li className="realisations-item-2">2</li>
							<li className="realisations-item-2">3</li>
							<li className="realisations-item-2">4</li>
							<li className="realisations-item-2" onClick={()=>document.getElementById('section4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}><span className="clicDown"><span className="clicDown--1"></span><span className="clicDown--2"></span></span></li>
						</ul>
					</div>
				</section>
				<section className="section-real parallax-real" id="section4">
					<div className="realisations-carrousel3" onWheel={wheelCarrousel2}>
						<ul className="realisations-list-3" >
							<li className="realisations-item-3">0</li>
							<li className="realisations-item-3">1</li>
							<li className="realisations-item-3">2</li>
							<li className="realisations-item-3">3</li>
							<li className="realisations-item-3">4</li>
							<li className="realisations-item-3">0</li>
						</ul>
					</div>
				</section>
				<section className="section-real static-real" id="section5"></section>
				<section className="section-real parallax-real"></section>
				<section className="section-real static-real"></section>
			</main>
		</div>
  );
}

export default Realisations;