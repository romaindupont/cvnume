import React, { useState } from 'react';
import './style.scss';
import PageAPropos from '../PageAPropos';
import classNames from 'classnames';

const InternetPage = ({setInternetPageOpen, openBig, setOpenBig}) => {
	const sizeScreen = () => {
		if (openBig === 'normal') {
			setOpenBig('big');
		}
		if (openBig === 'big') {
			setOpenBig('normal');
		}
	}
  return (
		<div className={`internetPage ${openBig}`}>
			<div className="internetPage-onglet">
				<div className="internetPage-onglet--logo">
					<div className="internetLogo--logo">
						<span className="w--logo"></span>
					</div>
				</div>
				<span className="internetPage-onglet--nom">Page A propos</span>
				<span className="closeOnglet">&#xD7;</span>
			</div>
			<div className="dossierOuvertHeader-groupAction internetPage-onglet-group">
				<span className="dossierOuvertHeader-minus internetPage-onglet-group-minus" onClick={()=>setInternetPageOpen(false)}></span>
				<span className="dossierOuvertHeader-big internetPage-onglet-group-big" onClick={sizeScreen} ></span>
				<span className={classNames("dossierOuvertHeader-bigSmall", {"dossierOuvertHeader-bigSmall--big internetPage-onglet-group-big":openBig==='big'})}></span>
				<span className="dossierOuvertHeader-close" onClick={()=>setInternetPageOpen(false)}>
					<span className="dossierOuvertHeader-close--1 internetPage-onglet-group-close"></span>
					<span className="dossierOuvertHeader-close--2 internetPage-onglet-group-close"></span>
				</span>
			</div>
			<div className="internetPage-onglet-adresse">
				<span className="internetPage-onglet--back">&#x2329;</span>
				<span className="internetPage-onglet--go">&#x232A;</span>
				<span className="internetPage-onglet--charge"></span>
				<span className="internetPage-onglet-web">www.romaindupont.me/a_propos</span>
			</div>
			<div className="pageWeb">
				{/* <iframe src="https://www.romaindupont.me" frameborder="0"></iframe> */}
				<PageAPropos />
			</div>
		</div>
  );
}

export default InternetPage;