import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

const Menu = () => {
	const [ closeMenu, setClose ] = useState(false);
	const scrollUl = document.querySelector(".ul-scroll");
	let itemsScrolled;
	let itemsMax;
	let cloned = false;
	const listOpts = {
		itemCount: null,
		itemHeight: null,
		items: [],
	}

	const scrollWrap = (e) => {

		const menuList = [];
		const liElement = document.querySelectorAll("li");
		menuList.push(liElement)
		liElement.forEach((items) => items.classList.remove("active") & items.classList.remove("derriere"))
		itemsScrolled = Math.ceil((e.target.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight)
		if (itemsScrolled < listOpts.items.length) {
			listOpts.items[itemsScrolled].classList.add("active");
			const yourListItem = document.querySelector("li.active + li");
			yourListItem.classList.add("derriere");
		}
		if (itemsScrolled > listOpts.items.length - 3) {
			for (let i = 1; i <= itemsMax - 1; i++) {

				let node;
				node = listOpts.items[i];
			if (!cloned) {
				node = listOpts.items[i].cloneNode(true);
			}
				scrollUl.appendChild(node);
				}
		}

		initItems(cloned, e);
	}
	const initItems = (scrollSmooth, e) => {
		
		listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
		listOpts.itemHeight = listOpts.items[0].clientHeight;
		listOpts.itemCount = listOpts.items.length;
		if (!itemsMax) {
			itemsMax = listOpts.itemCount;
		}
		
		if (scrollSmooth) {
			let seamLessScrollPoint = ((itemsMax - 2) * listOpts.itemHeight);
			e.target.scrollTop = seamLessScrollPoint;
		}      
	}
	const openMenu = () => {
		setClose(!closeMenu)
		/* document.querySelector("li").firstElementChild.classList.add("active"); */
		document.querySelectorAll("li:nth-child(2)").forEach(EL => EL.classList.add("active"));
	}
  return (
		<>
    <div className={classNames("menu", {"menu--clic":closeMenu})} onClick={openMenu} >
      <div className="bordgaucheHaut"></div>
			<div className="borddroitHaut"></div>
			<div className="bordgaucheBas"></div>
			<div className="borddroitBas"></div>
    </div>
		<div className={classNames("round", {"round--clic":closeMenu})}>
		<div className={classNames("menuNavigation", {"menuNavigation--clic":closeMenu})} id="scroll-container">
			<div className="wrap-container" id="wrap-scroll" onScroll={scrollWrap}>
			<ul className="ul-scroll">
			<li></li>
				<li><span className="item">A propos</span></li>
				<li><span className="item">Connaissances</span></li>
				<li><span className="item">Hobbies</span></li>
				<li><span className="item">Diplômes</span></li>
				<li><span className="item">Réalisations</span></li>
				<li><span className="item">Contact</span></li>
			</ul>
			</div>
		</div>
		</div>
		</>
  );
}

export default Menu;