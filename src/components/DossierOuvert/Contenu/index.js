import React from 'react';
import './style.scss';
import classNames from 'classnames';

const Contenu = ({ mode, contenu, setOpenBig }) => {
	const openThePage = (listclass) => {
		console.log(listclass)
		if (listclass === "html") {
			setOpenBig('normal')

		}
		else {
			setOpenBig('close')
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
				<div className={classNames("contenuFile-line", {"contenuFile-line--image":mode})} key={i} /* onClick={openThePage(list.class)} */>
					<div className={classNames("contenuFile-nom", {"contenuFile-nom--image":mode})}>
						<span className={classNames(`${list.class}`, { [`${list.class}--image`]:mode})}>
							<span className={classNames(`${list.class}-nom`, {[`${list.class}-nom--image`]:mode})}>{list.nomSheet}</span>
						</span>
						<p className="lienMenu--1-titre">{list.nomcontenu}</p>
					</div>
					<div className={classNames("contenuFile-modif", {"contenuFile-modif--image":mode})}>
						<p className="contenuFile-titre">{list.dateModif}</p>
					</div>
					<div className={classNames("contenuFile-type", {"contenuFile-type--image":mode})}>
						<p className="contenuFile-titre">{list.type}</p>
					</div>
					<div className={classNames("contenuFile-taille", {"contenuFile-taille--image":mode})}>
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