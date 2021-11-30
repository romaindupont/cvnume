import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';

const FootGame = ({ shootValue }) => {
	const [ timer, setTimer ] = useState(0);
	const stopAction = useCallback(async () => {	
		document.querySelector('.barre-1').style.background='#c5c3c3';
		document.querySelector('.barre-2').style.background='#c5c3c3';
		document.querySelector('.barre-3').style.background='#c5c3c3';
		document.querySelector('.barre-4').style.background='#c5c3c3';
		document.querySelector('.barre-5').style.background='#c5c3c3';
		document.querySelector('.barre-6').style.background='#c5c3c3';
		document.querySelector('.barre-7').style.background='#c5c3c3';
		document.querySelector('.barre-8').style.background='#c5c3c3';
		document.querySelector('.barre-9').style.background='#c5c3c3';
		document.querySelector('.barre-10').style.background='#c5c3c3';
		await shootValue(timer);
		setTimer(0);
	},[timer,shootValue])
	const spaceBar = useCallback((e) => {
		if(e.keyCode === 32) {
			setTimer(1);
			if (timer === 1) {
				document.querySelector('.barre-1').style.background='#ffd267';
				setTimer(2);
			}
			if (timer === 2) {
				document.querySelector('.barre-2').style.background='#ffcb4d';
				setTimer(3);
			}
			if (timer === 3) {
				document.querySelector('.barre-3').style.background='#ffc334';
				setTimer(4);
			}
			if (timer === 4) {
				document.querySelector('.barre-4').style.background='#ffbc1a';
				setTimer(5);
			}
			if (timer === 5) {
				document.querySelector('.barre-5').style.background='#ffb401';
				setTimer(6);
			}
			if (timer === 6) {
				document.querySelector('.barre-6').style.background='#f39a05';
				setTimer(7);
			}
			if (timer === 7) {
				document.querySelector('.barre-7').style.background='#e57505';
				setTimer(8);
			}
			if (timer === 8) {
				document.querySelector('.barre-8').style.background='#d34b08';
				setTimer(9);
			}
			if (timer === 9) {
				document.querySelector('.barre-9').style.background='#c2240b';
				setTimer(10);
			}
			if (timer === 10) {
				document.querySelector('.barre-10').style.background='#b70b0d';
				setTimer(11);
			}	
			if (timer === 11) {
				stopAction();
			}	
	 	}
	},[timer, stopAction]);

	useEffect(() => {
    document.addEventListener("keydown", spaceBar);
		document.addEventListener("keyup", stopAction);
    return () => {
			document.removeEventListener("keydown", spaceBar);
			document.addEventListener("keyup", stopAction);
    };
	}, [spaceBar, stopAction]);
  return (
		<div className="footGame">
			<div className="field">
				<div className="field-1">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-2">
					<div className="T-1"></div>
					<div className="T-2"> <span className="player"></span> </div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-3">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-4">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-5">
					<div className="T-1"><div className="engagement"></div><div className="rondCentral"></div></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"><div className="but"></div><div className="surface"><div className="penalty"></div><div className="surfaceRond"></div></div></div>
				</div>
				<div className="field-6">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-7">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-8">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-9">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
				<div className="field-10">
					<div className="T-1"></div>
					<div className="T-2"></div>
					<div className="T-3"></div>
					<div className="T-4"></div>
					<div className="T-5"></div>
					<div className="T-6"></div>
					<div className="T-7"></div>
					<div className="T-8"></div>
					<div className="T-9"></div>
					<div className="T-10"></div>
					<div className="T-11"></div>
					<div className="T-12"></div>
					<div className="T-13"></div>
					<div className="T-14"></div>
					<div className="T-15"></div>
					<div className="T-16"></div>
					<div className="T-17"></div>
					<div className="T-18"></div>
					<div className="T-19"></div>
					<div className="T-20"></div>
					<div className="T-21"></div>
					<div className="T-22"></div>
					<div className="T-23"></div>
					<div className="T-24"></div>
					<div className="T-25"></div>
					<div className="T-26"></div>
					<div className="T-27"></div>
					<div className="T-28"></div>
					<div className="T-29"></div>
					<div className="T-30"></div>
				</div>
			</div>
			<div className="barres">
				<div className="barre-1"></div>
				<div className="barre-2"></div>
				<div className="barre-3"></div>
				<div className="barre-4"></div>
				<div className="barre-5"></div>
				<div className="barre-6"></div>
				<div className="barre-7"></div>
				<div className="barre-8"></div>
				<div className="barre-9"></div>
				<div className="barre-10"></div>
			</div>
		</div>
  );
}

export default FootGame;