import React from 'react';
import './style.scss';

const DessinDiplome = ({ titre, diplomes, textC, date }) => {
	return (
		<div className="dessinDiplome">
			<div className="carreMinistere">
				<div className="carreMinistere-flag">
					<span className="carreMinistere-bleu"></span>
					<span className="carreMinistere-blanc"></span>
					<span className="carreMinistere-rouge"></span>
				</div>
				<div className="carreMinistere-nom">Ministere du travail de l'emploi et de l'insertion</div>
			</div>
			<div className="Titre-haut">REPUBLIQUE FRANCAISE</div>
			<div className="TitrePro">{titre}</div>
			<p className="text-1">Monsieur DUPONT Romain, né le 2 janvier 1984 à Valognes (FRANCE), <br/> a obtenu, par décision du jury, le titre professionnel de :</p>
			<p className="text-centre">{diplomes}</p>
			<p className="text-aside">(arrêté du 6 avril 2018, publié au journal officiel du 17 avril 2018)</p>
			<p className="text-general">{textC}<br/>Il est inscrit au répertoire national des certifications professionnelles.</p>
			<p className="text-date">Etabli à Paris (Paris) le {date}</p>
			<p className="text-signature">Pour la ministre, par délégation</p>
			<div className="sceau"></div>
		</div>
  );
}

export default DessinDiplome;