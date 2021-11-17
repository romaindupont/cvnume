import React from 'react';
import './style.scss';

const PageAPropos = () => {
/* 	const [ sendConfetti, setSendConfetti ] = useState(false); */
	const frame = () => {
		const confetti = document.getElementById('confetti');
		confetti.style.display = 'flex';
	}
	/* const confettiLeave = () => {
		const confetti = document.getElementById('confetti');
		confetti.style.display = 'none';
	} */
  return (
		<>
		<div className="a_propos">
			<div id="confetti"><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div><div className="confetti-piece"></div></div>
			<div className="matete"><img src="" alt="" /><span>ça c'est ma tête</span></div>
			<h1 className="matete-title">A propos</h1>
			<p className="matete-paragraph firstP"> <span className="firstLetter">N</span>é en 1984, père de deux enfants, passionné de sport et d'informatique depuis de nombreuses années, j'ai effectué ma reconversion en 2021, après plus de 15 ans en tant qu'acheteur-approvisionneur.<span className="passivieux">En résumé : Non je ne suis pas si vieux, j'ai 2 adorables enfants, geek un peu, mais toujours pas si vieux !</span></p>
			<p className="matete-paragraph suite">J'ai intégré l'<strong>école O'clock</strong> ou j'ai pu acquérir des compétences dans ce domaine.</p><p className="matete-paragraph suite" onMouseEnter={frame} /* onMouseLeave={confettiLeave} */>En Juin 2021, j'ai obtenu le <strong >titre professionel Développeur web & web mobile</strong>.</p><p className="matete-paragraph suite">Ce site à pour but de vous faire découvrir mes connaissances et leur mise en pratique que ce soit sur ce site ou pour certains prestataires dans le dossier de mes réalisations.</p><p className="matete-paragraph suite">Je suis disponible pour échanger, alors n'hésitez pas à me contacter, pour tous vos projets de réalisations de vos sites web.</p>
			{/* <img src="" alt="" className="matete" /> */}
		</div>
		</>
  );
}

export default PageAPropos;