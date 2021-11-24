
export const colorChangeFiles = (data) => {
	const filesTop = document.querySelectorAll('.dossierDevant');
	const filesGround = document.querySelectorAll('.dossierArriere');
	const languette = document.querySelectorAll('.dossierLanguette');
	const dossierMenu = document.querySelectorAll('.dossierMenu');

	const DossierFile = document.querySelector('.dossierSmall-file');
	filesTop.forEach((file)=>(
		file.style.cssText = `background: ${data};box-shadow:
	0 0px 0 ${data},
	0 0px 0 ${data},
	0 3px 0 ${data},
	0 0px 0 ${data},
	0 -1px 0 ${data},
	0 7px 1px rgb(0 0 0 / 10%),
	0 0 5px rgb(0 0 0 / 10%),
	0 1px 3px rgb(0 0 0 / 30%),
	0 3px 5px rgb(0 0 0 / 30%),
	0 5px 10px rgb(0 0 0 / 25%),
	0 1px 0px rgb(0 0 0 / 20%),
	0 12px 0px rgb(0 0 0 / 15%);`));
	filesGround.forEach((file)=>file.style.background = `${data}`);
	languette.forEach((file)=>file.style.background = `${data}`);
	dossierMenu.forEach((file)=>file.style.background = `${data}`);
	DossierFile.style.background = `${data}`;
}


export const colorChangeMenu = (data) => {
	document.querySelector('.bordgaucheHaut').style.background = `${data}`;
	document.querySelector('.bordgaucheBas').style.background = `${data}`;
	document.querySelector('.borddroitHaut').style.background = `${data}`;
	document.querySelector('.borddroitBas').style.background = `${data}`;
	document.querySelector('.round').style.border = `15px solid ${data}`;
}


export const colorChangeMenuBg = (data) => {
	document.querySelector('.round').style.background = `${data}`;
}