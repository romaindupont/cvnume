import React from 'react';
import './style.scss';
import classNames from 'classnames';

const Contenu = ({ mode }) => {
  return (
		<div className="contenu">
			<div className={classNames("headerContenu", {"headerContenu--image":mode})}>
				<div className="headerContenu-nom">Nom</div>
				<div className="headerContenu-modif">Modifié le</div>
				<div className="headerContenu-type">Type</div>
				<div className="headerContenu-taille">Taille</div>
			</div>
			<div className={classNames("contenuFile", {"contenuFile--image":mode})}>
				<div className={classNames("contenuFile-line", {"contenuFile-line--image":mode})}>
					<div className={classNames("contenuFile-nom", {"contenuFile-nom--image":mode})}>
						<span className={classNames("dossierMenu", {"dossierMenu--image":mode})}></span>
						<p className="lienMenu--1-titre">A propos</p>
					</div>
					<div className={classNames("contenuFile-modif", {"contenuFile-modif--image":mode})}>
						<p className="contenuFile-titre">06/10/2021 10:10</p>
					</div>
					<div className={classNames("contenuFile-type", {"contenuFile-type--image":mode})}>
						<p className="contenuFile-titre">Dossier de fichiers</p>
					</div>
					<div className={classNames("contenuFile-taille", {"contenuFile-taille--image":mode})}>
						<p className="contenuFile-titre"></p>
					</div>
				</div>
				<div className={classNames("contenuFile-line", {"contenuFile-line--image":mode})}>
					<div className={classNames("contenuFile-nom", {"contenuFile-nom--image":mode})}>
						<span className={classNames("feuille", {"feuille--image":mode})}></span>
						<p className="lienMenu--1-titre">monCv</p>
					</div>
					<div className={classNames("contenuFile-modif", {"contenuFile-modif--image":mode})}>
						<p className="contenuFile-titre">06/10/2021 10:10</p>
					</div>
					<div className={classNames("contenuFile-type", {"contenuFile-type--image":mode})}>
						<p className="contenuFile-titre">Document</p>
					</div>
					<div className={classNames("contenuFile-taille", {"contenuFile-taille--image":mode})}>
						<p className="contenuFile-titre">100 Ko</p>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Contenu;