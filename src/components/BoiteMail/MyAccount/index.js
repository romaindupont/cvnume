import React from 'react';
import './style.scss';
import GithubLogo from '../../../assets/img/github-brands.svg';
import LinkeDinLogo from '../../../assets/img/linkedin-brands.svg';
import GlobeLogo from '../../../assets/img/globe-solid.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyAccount = () => {
  return (
		<div className="myAccount">
			<svg id="monSvg" width="26.4582mm" height="26.4582mm" viewBox="1300 0 46 1646">
				<g id="fond">
					<polygon className="contour inside" points="2667,8 2447,119 1574,569 754,966 21,8"/>
				</g>
			</svg>
			<div className="myAccount-contenu">
				<div className="myAccount-image"><div className="myAccount-image1"></div></div>
				<div className="myAccount-lien">
					<a className="myAccount-lien--link" target="_blank" rel="noreferrer" href="https://github.com/romaindupont"><img src={GithubLogo} alt="" /></a>
					<a className="myAccount-lien--link" target="_blank" rel="noreferrer" href="https://www.romaindupont.me"><img src={LinkeDinLogo} alt="" /></a>
					<a className="myAccount-lien--link" target="_blank" rel="noreferrer" href="https://www.romaindupont.me"><img src={GlobeLogo} alt="" /></a>
					<a className="myAccount-lien--link" target="_blank" rel="noreferrer" href="https://linkedin.com/in/romain-dupont-developpeurweb"><img src={GlobeLogo} alt="" /></a>
				</div>
				<div className="myAccount-email"><a href="mailto:rdt.romaindupont@gmail.com">rdt.romaindupont@gmail.com</a></div>
				<div className="myAccount-tel"><a href="tel:+33629913634">06 29 91 36 34</a></div>
			</div>
			<div id="mapid">
				<MapContainer center={[49.174534, -0.335659]} zoom={12} scrollWheelZoom={false} style={{height:180+'px'}}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[49.174534, -0.335659]}>
						<Popup>
							I'm living in Caen.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
  );
}

export default MyAccount;