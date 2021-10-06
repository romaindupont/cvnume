import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

const Menu = () => {
	const [ closeMenu, setClose ] = useState(false);

  return (
    <div className={classNames("menu", {"menu--clic":closeMenu})} onClick={()=>setClose(!closeMenu)} >
      <div className="bordgaucheHaut"></div>
			<div className="borddroitHaut"></div>
			<div className="bordgaucheBas"></div>
			<div className="borddroitBas"></div>
			<nav className={classNames("menuNavigation", {"menuNavigation--clic":closeMenu})} id="scroll-container">
				<div className="wrap-container" id="wrap-scroll">
				<ul className="ul-scroll">
					<li className="active"><span className="item">A propos</span></li>
					<li><span className="item">Connaissances</span></li>
					<li><span className="item">Hobbies</span></li>
					<li><span className="item">Contact</span></li>
					<li><span className="item">Diplômes</span></li>
					<li><span className="item">Projets</span></li>
				</ul>
				</div>
			</nav>
    </div>
  );
}

export default Menu;