import React, { useState } from 'react';
import './style.scss';
import PageAPropos from '../PageAPropos';
import classNames from 'classnames';

const InternetPage = ({ openBig, setOpenBig, listDossier, id}) => {
	const list = listDossier.find((dossier) => dossier.id === id)
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
				<span className="internetPage-onglet--nom">Page {list.name}</span>
				<span className="closeOnglet">&#xD7;</span>
			</div>
			<div className="dossierOuvertHeader-groupAction internetPage-onglet-group">
				<span className="dossierOuvertHeader-minus internetPage-onglet-group-minus" onClick={()=>setOpenBig('close')}></span>
				<span className="dossierOuvertHeader-big internetPage-onglet-group-big" onClick={sizeScreen} ></span>
				<span className={classNames("dossierOuvertHeader-bigSmall", {"dossierOuvertHeader-bigSmall--big internetPage-onglet-group-big":openBig==='big'})}></span>
				<span className="dossierOuvertHeader-close" onClick={()=>setOpenBig('close')}>
					<span className="dossierOuvertHeader-close--1 internetPage-onglet-group-close"></span>
					<span className="dossierOuvertHeader-close--2 internetPage-onglet-group-close"></span>
				</span>
			</div>
			<div className="internetPage-onglet-adresse">
				<span className="internetPage-onglet--back">&#x2329;</span>
				<span className="internetPage-onglet--go">&#x232A;</span>
				<span className="internetPage-onglet--charge"></span>
				<span className="internetPage-onglet-web">www.romaindupont.me/{list.slug}</span>
			</div>
			<div className="pageWeb">
				{/* <iframe src="https://www.romaindupont.me" frameborder="0"></iframe> */}
				{list.slug === "a_propos" ? <PageAPropos /> : (
					<div className="venir">A venir</div>
				)
				}
				
			</div>
		</div>
  );
}

export default InternetPage;