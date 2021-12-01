import React, { useState } from 'react';
import './style.scss';
import PageAPropos from '../PageAPropos';
import PageConnaissances from '../PageConnaissances';
import Diplomes from '../../containers/Diplomes';
import classNames from 'classnames';
import Hobbies from '../Hobbies';
import Realisations from '../../containers/Realisations';
import NewTab from '../../containers/InternetPage/NewTab';

const InternetPage = ({ listDossier, id, openPageInternet, closePage, smallPage, largePage }) => {
	const [ openNewTab, setOpenNewTab ] = useState(false);
	const list = listDossier.find((dossier) => dossier.id === id);
	const sizeScreen = () => {
		if (openPageInternet === 'normal') {
			largePage();
		}
		if (openPageInternet === 'big') {
			smallPage();
		}
	}
  return (
		<div className={`internetPage ${openPageInternet}`}>
			<div className="internetPage-onglet">
				<div className="internetPage-onglet--logo">
					<div className="internetLogo--logo">
						<span className="w--logo"></span>
					</div>
				</div>
				<span className="internetPage-onglet--nom">Page {list.name}</span>
				<span className="closeOnglet">&#xD7;</span>
			</div>
			{openNewTab && (
					<div className="internetPage-onglet newOnglet">
						<div className="internetPage-onglet--logo">
							<div className="internetLogo--logo">
								<span className="w--logo"></span>
							</div>
						</div>
						<span className="internetPage-onglet--nom">Site Web</span>
						<span className="closeOnglet" onClick={()=>setOpenNewTab(false) }>&#xD7;</span>
					</div>
			)}
			<div className="dossierOuvertHeader-groupAction internetPage-onglet-group">
				<span className="dossierOuvertHeader-minus internetPage-onglet-group-minus" onClick={()=>closePage('close')}></span>
				<span className="dossierOuvertHeader-big internetPage-onglet-group-big" onClick={sizeScreen} ></span>
				<span className={classNames("dossierOuvertHeader-bigSmall", {"dossierOuvertHeader-bigSmall--big internetPage-onglet-group-big":openPageInternet==='big'})}></span>
				<span className="dossierOuvertHeader-close" onClick={()=>closePage('close')}>
					<span className="dossierOuvertHeader-close--1 internetPage-onglet-group-close"></span>
					<span className="dossierOuvertHeader-close--2 internetPage-onglet-group-close"></span>
				</span>
			</div>
			<div className="internetPage-onglet-adresse">
				<span className="internetPage-onglet--back">&#x2329;</span>
				<span className="internetPage-onglet--go">&#x232A;</span>
				<span className="internetPage-onglet--charge"></span>
				{!openNewTab && (<span className="internetPage-onglet-web">www.romaindupont.me/{list.slug}</span>)}
				{openNewTab && (<span className="internetPage-onglet-web">www.romaindupont.me</span>)}
			</div>
			<div className="pageWeb">
				{list.slug === "a_propos" ? <PageAPropos /> : list.slug === "connaissances" ? <PageConnaissances /> : list.slug === "diplomes" ? <Diplomes /> : list.slug === "hobbies" ? <Hobbies /> : list.slug === "realisations" ? <Realisations setOpenNewTab={setOpenNewTab}/> :(
					<div className="venir"></div>
				)}
			</div>
			{openNewTab && (<div className="newPageWeb">
				<NewTab />
			</div>)}
		</div>
  );
}

export default InternetPage;