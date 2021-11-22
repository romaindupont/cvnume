import React from 'react';
import './style.scss';


const Personnalisation = ({setGetPage}) => {
	let bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "linear-gradient(to, #2d5c01, #0069a7, #0400ff);",
};
  return (
		<div className="system">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
			<div className="system-menu">
				<ul className="system-menu-ul">
					<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
					<li className="system-menu-li"><a href="#backGround">Arrière-plan</a></li>
					<li className="system-menu-li"><a href="#sys">Couleurs</a></li>
				</ul>
			</div>
			<div className="system-action" id="srollbarSys">
				<section className="system-action-section" id="backGround">
					<h2 className="system-action-section-title">Arrière-plan</h2>
					<span className="system-action-actualScreen"></span>
					<span>Choisir votre fond d'écran</span>
					<div className="system-action-actualScreenSmall">
						<span className="system-action-small" style={{backgroundColor: bgColors.Yellow}}></span>
			{/* 			<span className="system-action-small"></span>
						<span className="system-action-small"></span>
						<span className="system-action-small"></span>
						<span className="system-action-small"></span> */}
					</div>
				</section>
				<section className="system-action-section" id="sys">
					<h2 className="system-action-section-title">Spécifications</h2>
					<p className="system-action-section-p">Voici les spécifications de l'appareil</p>
					<span>Version navigateur : <span>{navigator.appVersion}</span></span><br></br>
					<span>Editeur : <span>Rdd professionnel edition</span></span><br></br>
					<span>Version : <span>V0.1-2021</span></span><br></br>
					<span>MAJ : <span>le 17/11/2021</span></span><br></br>
				</section>
				<section className="system-action-section" id="info">
					<h2 className="system-action-section-title">Informations</h2>
					<p className="system-action-section-p">Déclarer un bug :</p>
					<a href="mailto:rdt.romaindupont@gmail.com">rdt.romaindupont@gmail.com</a>
					<span></span><span></span>
				</section>
			</div>
			</div>
		</div>

  );
}

export default Personnalisation;