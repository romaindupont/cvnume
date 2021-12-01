import React from 'react';
import './style.scss';
import Paysage from '../../assets/img/paysage.jpg';
import Mer from '../../assets/img/mer.jpg';
import Sand from '../../assets/img/sand.jpg';
import Jungle from '../../assets/img/jungle.jpg';
import { backgroundChoose } from '../../utils/backgroundChoose';
import { colorChangeFiles, colorChangeMenu, colorChangeMenuBg } from '../../utils/colorChange';

const Personnalisation = ({setGetPage, changeTheme}) => {
	const bgChoose = (e) => {
		backgroundChoose(e.target.getAttribute("data-image-number"));
	}
	const themeChange = (e) => {
		changeTheme(e.target.value);
		if(e.target.value==='jungle') {
			backgroundChoose('Image8');
		}
		if(e.target.value==='hot') {
			backgroundChoose('Image7');
		}
		if(e.target.value==='sea') {
			backgroundChoose('Image6');
		}
		if(e.target.value==='freeze') {
			backgroundChoose('Image5');
		}
	}
	const filesColorChange = (e) => {
		colorChangeFiles(e.target.value);
	}
	const menuColorChange = (e) => {
		colorChangeMenu(e.target.value);
	}
	const menuColorChangeBg = (e) => {
		colorChangeMenuBg(e.target.value);
	}
  return (
		<div className="system">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
			<div className="system-menu">
				<ul className="system-menu-ul">
					<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
					<li className="system-menu-li"><a href="#backGround">Arrière-plan</a></li>
					<li className="system-menu-li"><a href="#color">Thème</a></li>
					<li className="system-menu-li"><a href="#files">Couleurs</a></li>
				</ul>
			</div>
			<div className="system-action" id="srollbarSys">
				<section className="system-action-section" id="backGround">
					<h2 className="system-action-section-title">Arrière-plan</h2>
					<span className="system-action-actualScreen"></span>
					<span>Choisir votre fond d'écran</span>
					<div className="system-action-actualScreenSmall">
						<span className="system-action-small" style={{backgroundImage: `linear-gradient(225deg, #2d5c01, #0069a7, #0400ff)`}} data-image-number="Image1" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `linear-gradient(225deg, #befd84, #62bdf3, #5350f5)`}} data-image-number="Image2" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `linear-gradient(225deg, #ff9c62, #a72902, #5a0101)`}} data-image-number="Image3" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `linear-gradient(225deg, #fbe90b, #9b7a01, #5d6a07)`}} data-image-number="Image4" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `url(${Paysage})`, backgroundSize: 'cover'}} data-image-number="Image5" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `url(${Mer})`, backgroundSize: 'cover'}} data-image-number="Image6" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `url(${Sand})`, backgroundSize: 'cover'}} data-image-number="Image7" onClick={bgChoose}></span>
						<span className="system-action-small" style={{backgroundImage: `url(${Jungle})`, backgroundSize: 'cover'}} data-image-number="Image8" onClick={bgChoose}></span>
					</div>
				</section>
				<section className="system-action-section" id="color">
					<h2 className="system-action-section-title">Thème</h2>
					<select name="theme" id="theme" onChange={themeChange}>
						<option value="light">clair</option>
						<option value="dark">sombre</option>
						<option value="jungle">jungle</option>
						<option value="freeze">freeze</option>
						<option value="hot">hot</option>
						<option value="sea">sea</option>
					</select>
				</section>
				<section className="system-action-section" id="files">
					<h2 className="system-action-section-title">Couleurs</h2>
					<div className="system-action-section--input">
						<label htmlFor="couleurFiles">Couleurs dossiers</label>
						<input type="color" name="couleurFiles" id="couleur" onChange={filesColorChange} value="#dbdb0c"/>
						<label htmlFor="couleurMenu">Couleurs menu</label>
						<input type="color" name="couleurMenu" id="couleur" onChange={menuColorChange} value="#e2f8ff"/>
						<label htmlFor="couleurMenuBg">Couleurs menu Background</label>
						<input type="color" name="couleurMenuBg" id="couleur" onChange={menuColorChangeBg} value="#dbe1c2"/>
					</div>
				</section>		
			</div>
			</div>
		</div>
  );
}

export default Personnalisation;