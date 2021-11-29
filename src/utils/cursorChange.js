import Cursor from '../assets/img/cursor.svg';
import Cursor1 from '../assets/img/cursor1.png';
import SnowCursor from '../assets/img/snowCursor.png';


export const CursorChange = (data) => {
	const CursorBureau = document.querySelector(".bureauBg");
		if(data === "cursor") {
			return CursorBureau.style.cursor = `url(${Cursor}),pointer`;
		}
		if(data === "cursor-1") {
			return CursorBureau.style.cursor = `url(${Cursor1}),pointer`;
		}
		if(data === "default") {
			return CursorBureau.style.cursor = `auto`;
		}
		if(data === "snowCursor") {
			return 	CursorBureau.style.cursor = `url(${SnowCursor}),pointer`;
		}

}