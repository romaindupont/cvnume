import React from 'react';
import './style.scss';
import Pdf from '../../assets/img/cv-romaindupont2021.pdf';

const CvPdf = () => {
  return (
		<a href={Pdf} download>
			<div className="cvPdf">
				<span className="cvPdf-span">pdf</span>
			</div>
		</a>
  );
}

export default CvPdf;