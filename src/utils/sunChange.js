

export const SunColorChange = (data) => {
	const choose = document.querySelectorAll('.lightColor');
	console.log(data)
	choose.forEach((choix) => {
		if(data>=-5 && data <=15) {
			return choix.style.fill = "#2e2e04"
		}
		if(data>=16 && data <=35) {
			return choix.style.fill = "#c2c511"
		}
		if(data>=36 && data <=60) {
			return choix.style.fill = "#d8db0e"
		}
		if(data>=61 && data <=72) {
			return choix.style.fill = "#e2e510"
		}
		if(data>=73 && data <=82) {
			return choix.style.fill = "#eaed13"
		}
		if(data>=83 && data <=100) {
			return choix.style.fill = "#f0f32b"
		}
	})
}