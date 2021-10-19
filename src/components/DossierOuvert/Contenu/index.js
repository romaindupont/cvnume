import React from 'react';
import './style.scss';
import classNames from 'classnames';

const Contenu = ({ mode, contenu, smallPage, smallMailPage }) => {
	const openThePage = (e) => {
		if (e.target.getAttribute("data-styleclass") === "html") {
			smallPage()
		}
		if (e.target.getAttribute("data-styleclass") === "mail") {
			smallMailPage()
		}
	}
  return (
		<div className="contenu">
			<div className={classNames("headerContenu", {"headerContenu--image":mode})}>
				<div className="headerContenu-nom">Nom</div>
				<div className="headerContenu-modif">Modifié le</div>
				<div className="headerContenu-type">Type</div>
				<div className="headerContenu-taille">Taille</div>
			</div>
			<div className={classNames("contenuFile", {"contenuFile--image":mode})}>
			{contenu.map((list, i)=> (
				<div className={classNames("contenuFile-line", {"contenuFile-line--image":mode})} key={i} onClick={openThePage}>
					<div className={classNames("contenuFile-nom", {"contenuFile-nom--image":mode})} >
						<span className={classNames(`${list.class}`, { [`${list.class}--image`]:mode})}>
							<span className={classNames(`${list.class}-nom`, {[`${list.class}-nom--image`]:mode})}>{list.nomSheet}</span>
						</span>
						<p className="lienMenu--1-titre" data-styleclass={list.class}>{list.nomcontenu}</p>
					</div>
					<div className={classNames("contenuFile-modif", {"contenuFile-modif--image":mode})} data-styleclass={list.class}>
						<p className="contenuFile-titre">{list.dateModif}</p>
					</div>
					<div className={classNames("contenuFile-type", {"contenuFile-type--image":mode})} data-styleclass={list.class}>
						<p className="contenuFile-titre">{list.type}</p>
					</div>
					<div className={classNames("contenuFile-taille", {"contenuFile-taille--image":mode})} data-styleclass={list.class}>
						<p className="contenuFile-titre">{list.taille}</p>
					</div>
				</div>
			)
			)}
			</div>
		</div>
				
  );
}

export default Contenu;