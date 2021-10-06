import React from 'react';
import './style.scss';
import classNames from 'classnames';

const HeaderDossier = ({ setActionDossier, actionDossier }) => {
	const screenBig = () => {
		if (actionDossier === 'normal') {
			setActionDossier('big');
		}
		if (actionDossier === 'big') {
			setActionDossier('normal');
		}
	}
	const closeScreen = () => {
		setActionDossier('close');
	}
  return (
		<div className="dossierOuvertHeader">
			<div className="dossierSmall">
				<div className="dossierSmall-file"></div>
			</div>
			<p className="dossierOuvertHeader-titre">A propos</p>
			<div className="dossierOuvertHeader-groupAction">
				<span className="dossierOuvertHeader-minus"></span>
				<span className="dossierOuvertHeader-big" onClick={screenBig}></span>
				<span className={classNames("dossierOuvertHeader-bigSmall", {"dossierOuvertHeader-bigSmall--big":actionDossier==='big'})}></span>
				<span className="dossierOuvertHeader-close" onClick={closeScreen}>
					<span className="dossierOuvertHeader-close--1"></span>
					<span className="dossierOuvertHeader-close--2"></span>
				</span>
			</div>
		</div>
  );
}

export default HeaderDossier;