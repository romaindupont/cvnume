import React, { useState } from 'react';
import './style.scss';
import HeaderDossier from './HeaderDossier';
import MenuLine from './MenuLine';
import MenuAccesRapide from './MenuAccesRapide';
import Contenu from './Contenu';

const DossierOuvert = ({ actionDossier, setActionDossier }) => {
	const [ mode, setMode ] = useState(false);
	let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

	
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
  const dragMouseDown = (e) => {
    e.stopPropagation();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

  }
  const elementDrag = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
    elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
  }
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  return (
    <div className={`dossierOuvert ${actionDossier}`} draggable="true" id="drag" onDragStart={dragElement}>
			<HeaderDossier setActionDossier={setActionDossier} actionDossier={actionDossier}/>
			<MenuLine setMode={setMode}/>
			<div className="centreDossier">
				<MenuAccesRapide />
				<Contenu mode={mode}/>
			</div>
			
			

    </div>

  );
}

export default DossierOuvert;