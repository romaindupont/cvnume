import React from 'react';
import './style.scss';
import PageAPropos from '../PageAPropos';
import PageConnaissances from '../PageConnaissances';
import classNames from 'classnames';

const InternetPage = ({ listDossier, id, openPageInternet, closePage, smallPage, largePage}) => {
	const list = listDossier.find((dossier) => dossier.id === id)
	const sizeScreen = () => {
		if (openPageInternet === 'normal') {
			largePage()
		}
		if (openPageInternet === 'big') {
			smallPage()
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
				<span className="internetPage-onglet-web">www.romaindupont.me/{list.slug}</span>
			</div>
			<div className="pageWeb">
				{/* <iframe src="https://www.romaindupont.me" frameborder="0"></iframe> */}
				{list.slug === "a_propos" ? <PageAPropos /> : list.slug === "connaissances" ? <PageConnaissances /> : (
					<div className="venir"></div>
				)
				}

				
			</div>
		</div>
  );
}

export default InternetPage;