import React from 'react';
import './style.scss';
import DessinDiplome from './DessinDiplome';
import EcoleOclock from './EcoleOclock';
import Work from './Work';

const Diplomes = ({ listDiplomes }) => {
	const scrollCarrousel = (e) => {
		const menuList = [];
		const liElement = document.querySelectorAll(".diplomes-item");
		menuList.push(liElement);
		liElement.forEach((items) => items.classList.remove("activation"));
		let itemsScrolled = Math.ceil((e.target.scrollTop + 200 / 2) / 200);
		if (itemsScrolled < menuList[0].length) {
			menuList[0][itemsScrolled].classList.add("activation");
			const choixDiplome = listDiplomes.find((diplome) => diplome.id === itemsScrolled);
			const InfosTitre = document.querySelector('.diplomes-titre');
			InfosTitre.textContent= choixDiplome.Titre;
			const InfosDate = document.querySelector('.diplomes-date');
			InfosDate.textContent= choixDiplome.date;
			const InfosContenu = document.querySelector('.diplomes-contenu');
			InfosContenu.textContent= choixDiplome.contenu;
		}
	}
  return (
		<div className="diplomes">
			<div className="diplomes-carrousel" onScroll={scrollCarrousel}>
				<ul className="diplomes-list">
					<li className="diplomes-item"></li>
					<li className="diplomes-item">
						<span className="item--diplome"></span>
						<DessinDiplome
							titre={'Titre professionnel'}
							diplomes={'Développeur web et web mobile'}
							textC={"Ce titre est classé au niveau 5, dans le(s) domaine(s) d'activité 326t et au niveau 5 du cadre européen des certifications."}
							date={'15 juillet 2021'}
						/> 
					</li>
					<li className="diplomes-item">
						<span className="item--formation">
							<span className="item--formation-plus"></span>
						</span>
						<EcoleOclock />
					</li>
					<li className="diplomes-item">
						<span className="item--job"></span>
						<span className="item--job-plus">JOB</span>
						<Work
							informations={"Mise en place d'outils d'aide à la gestion des approvisionnement et des achats, mais aussi d'aide à la gestion des plannings de production, au suivi de la production et des coûts d'achats. Amélioration de l'ERP SAGE en place. Outils réalisés à l'aide de Python et SQLite3."}
						/>
					</li>
					<li className="diplomes-item">
						<span className="item--job"></span>
						<span className="item--job-plus">JOB</span>
						<Work
							informations={"Aide à l'amélioration des ERP SAGE et SILOG. Création d'outils pour subvenir à l'augmentation de la charge de travail, pour permettre le suivi des manquants, la relance semi-auto des fournisseurs, la notation des fournisseurs dans le cadre d'ISO"}
						/>
					</li>
					<li className="diplomes-item">
						<span className="item--job"></span>
						<span className="item--job-plus">JOB</span>
						<Work
							informations={"Serveur durant 6 mois pour l'apprentissage de l'anglais"}
						/>
					</li>
					<li className="diplomes-item">
						<span className="item--diplome"></span>
						<DessinDiplome
							titre={'Diplome universitaire'}
							diplomes={'DUT Logistique et transport'}
							textC={"Ce titre est classé au niveau 5, dans le(s) domaine(s) d'activité 326t et au niveau 5 du cadre européen des certifications."}
							date={'2005'}
						/>
					</li>
					<li className="diplomes-item">
						<span className="item--diplome"></span>
						<DessinDiplome
							titre={'Baccalauréat Professionnel'}
							diplomes={'Bac pro Logistique et transport'}
							textC={"Ce titre est classé au niveau 4, dans le(s) domaine(s) d'activité et au niveau 4 du cadre européen des certifications."}
							date={'2003'}
						/>
					</li>
					<li className="diplomes-item">
						<span className="item--diplome"></span>
						<DessinDiplome
							titre={"Brevet d'études professionnelles"}
							diplomes={"BEP Comptabilité"}
							textC={"Ce titre est classé au niveau 3, dans le(s) domaine(s) d'activité et au niveau 3 du cadre européen des certifications."}
							date={'2001'}
						/>
					</li>
				</ul>
			</div>
			<div className="diplomes-infos">
				<div className="diplomes-titre"></div>
				<div className="diplomes-date"></div>
				<div className="diplomes-contenu"></div>
			</div>
		</div>
  );
}

export default Diplomes;