import React from 'react';
import './style.scss';
import Sun from './Sun';
import { SunColorChange } from '../../utils/sunChange';
import Cursor from '../../assets/img/cursor.svg';
import Cursor1 from '../../assets/img/cursor1.png';
import DefaultCursor from '../../assets/img/defaultCursor.png';
import SnowCursor from '../../assets/img/snowCursor.png';
import { CursorChange } from '../../utils/cursorChange';

const Ergo = ({setGetPage}) => {
	const changeSize = (e) => {
		const valueSizeText = document.querySelector('.input-textTaille--value');
		const val = e.target.value;
		const min = e.target.min ? e.target.min : 0;	
		const max = e.target.max ? e.target.max : 100;
		const newVal = Number(((val - min) * 100) / (max - min));
		valueSizeText.innerHTML = e.target.value;
		valueSizeText.style.left = `${newVal}%`;
		valueSizeText.style.zoom = `${newVal+50}%`;
	}
	const applyChangeSizeText = (e) => {
		e.preventDefault();
		const bureau = document.querySelector('.bureauBg');
		bureau.style.zoom=`${parseInt(e.target.form[0].value) + 50}%`
	}
	const changeLight = (e) => {
		const valueSizeText = document.querySelector('.input-lumi--value');
		const bureau = document.querySelector('.bureauBg');
		const val = e.target.value;
		const min = e.target.min ? e.target.min : 0;	
		const max = e.target.max ? e.target.max : 100;
		const newVal = Number(((val-5 - min) * 100) / (max - min));
		valueSizeText.style.left = `${newVal}%`;
		bureau.style.filter=`brightness(${newVal + 50}%)`;
		SunColorChange(newVal)
	}
	const cursorChangeClic = (e) => {
		CursorChange(e.target.alt)
	}
  return (
		<div className="ergonomie">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
				<div className="system-menu">
					<ul className="system-menu-ul">
						<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
						<li className="system-menu-li"><a href="#text">Taille Texte</a></li>
						<li className="system-menu-li"><a href="#lumino">Luminosité</a></li>
						<li className="system-menu-li"><a href="#cursor">Cursor</a></li>
					</ul>
				</div>
				<div className="system-action" id="srollbarSys">
					<section className="system-action-section" id="text">
						<h2 className="system-action-section-title">Taille Texte</h2>
						<form className="inputValueText" type="submit">
							<div className="input-textTaille--value">50</div>
							<input type="range" min="0" max="100" id="tailleText" step="1" onChange={changeSize} />
							<button type="submit" onClick={applyChangeSizeText}>Appliquer</button>
						</form>
					</section>
					<section className="system-action-section" id="lumino">
						<h2 className="system-action-section-title">Luminosité</h2>
						<div className="inputValueLumi" type="submit">
							<div className="input-lumi--value">
								<Sun />
							</div>
							<input type="range" min="0" max="100" id="lumi" step="1" onChange={changeLight}/>
						</div>
					</section>
					<section className="system-action-section" id="cursor">
						<h2 className="system-action-section-title">Cursor</h2>
							<span>Choix du Cursor :</span>
							<div className="cursorChoose">
								<div className="cursorModel">
									<img src={Cursor} alt="cursor" className="image-cursor" onClick={cursorChangeClic}/><span>Souris</span>
								</div>
								<div className="cursorModel">
									<img src={Cursor1} alt="cursor-1" className="image-cursor" onClick={cursorChangeClic}/><span>Fusée</span>
								</div>
								<div className="cursorModel">
									<img src={DefaultCursor} alt="default" className="image-cursor" onClick={cursorChangeClic}/><span>Défault</span>
								</div>
								<div className="cursorModel">
									<img src={SnowCursor} alt="snowCursor" className="image-cursor" onClick={cursorChangeClic}/><span>Neige</span>
								</div>
							</div>
					</section>
				</div>
			</div>
		</div>
  );
}

export default Ergo;