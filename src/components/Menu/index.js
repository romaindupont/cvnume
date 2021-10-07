import React, { useState, useEffect } from 'react';
import './style.scss';
import classNames from 'classnames';

const Menu = () => {
	const [ closeMenu, setClose ] = useState(false);
	const scrollW = document.querySelector("#wrap-scroll");
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
		/* console.log(e.target.scrollTop) */
		itemsScrolled = Math.ceil((e.target.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight)
		/* console.log(itemsScrolled) */
		if (itemsScrolled < listOpts.items.length) {
			listOpts.items[itemsScrolled].classList.add("active");
			console.log(itemsScrolled)
			/* listOpts.items[1+itemsScrolled].classList.add("derriere"); */
		}
/* 		if(e.target.scrollTop < 1) {
			itemsScrolled = 0;
		} */
	/* 	console.log(listOpts.items.length, itemsScrolled) */
		if (itemsScrolled > listOpts.items.length - 2) {
			/* console.log('more menu',listOpts.items.length, itemsScrolled) */
			for (let i = 1; i <= itemsMax - 1; i++) {

				let node;
				node = listOpts.items[i];
				/* node = listOpts.items[i].cloneNode(true); */
			/* 	console.log(node) */
			if (!cloned) {
				node = listOpts.items[i].cloneNode(true);
			}
				scrollUl.appendChild(node);
				/* if (!cloned) {
					node = listOpts.items[_x].cloneNode(true); */
				}
		}

		initItems(cloned, e);
	}
	const initItems = (scrollSmooth, e) => {
		
		listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
		listOpts.itemHeight = listOpts.items[0].clientHeight;
		/* console.log(listOpts.itemHeight) */
		listOpts.itemCount = listOpts.items.length;
		/* console.log(listOpts.itemCount) */
		if (!itemsMax) {
			itemsMax = listOpts.itemCount;
			/* console.log(itemsMax) */
		}
		
		if (scrollSmooth) {
/* 			console.log(scrollSmooth) */
			let seamLessScrollPoint = ((itemsMax - 2) * listOpts.itemHeight);
			e.target.scrollTop = seamLessScrollPoint;
		}      
	}

  return (
    <div className={classNames("menu", {"menu--clic":closeMenu})} onClick={()=>setClose(!closeMenu)} >
      <div className="bordgaucheHaut"></div>
			<div className="borddroitHaut"></div>
			<div className="bordgaucheBas"></div>
			<div className="borddroitBas"></div>
			<div className={classNames("menuNavigation", {"menuNavigation--clic":closeMenu})} id="scroll-container">
				<div className="wrap-container" id="wrap-scroll" onScroll={scrollWrap}>
				<ul className="ul-scroll">
				<li ></li>
					<li ><span className="item">A propos</span></li>
					<li><span className="item">Connaissances</span></li>
					<li><span className="item">Hobbies</span></li>
					<li><span className="item">Contact</span></li>
					<li><span className="item">Diplômes</span></li>
					<li><span className="item">Projets</span></li>
				</ul>
				</div>
			</div>
    </div>
  );
}

export default Menu;