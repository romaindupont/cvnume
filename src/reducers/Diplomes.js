

const initialState = {
	Listdiplomes: [
		{
			id: 1,
			Titre: "Développeur web & web mobile",
			date: "2021",
			images: '',
			contenu:'Titre professionnel niveau V'
		},
		{
			id: 2,
			Titre: "Formation Développeur web & web mobile",
			date: "2020-21",
			images: '',
			contenu: "Ecole O'clock, formation en téléprésentielle, durée 6 mois, spécialisation PHP, REACTJS"
		},
		{
			id: 3,
			Titre: "Acheteur-approvisionneur",
			date: "2011-21",
			images: '',
			contenu: "Société Hydequip, achat et approvisionnement de composants Electro-hydrauliques"
		},
		{
			id: 4,
			Titre: "Acheteur-approvisionneur",
			date: "2007-2011",
			images: '',
			contenu: "Société Alliansys-AOIP, achat et approvisionnement de composants Electroniques"
		},
		{
			id: 5,
			Titre: "Serveur en Angleterre",
			date: "2006",
			images: '',
			contenu: "Serveur dans un pub à Corsham pendant 6 mois"
		},
		{
			id: 6,
			Titre: "DUT Logistique et transport",
			date: "2005",
			images: '',
			contenu: "Diplômes obtenu à Alençon (61)"
		},
		{
			id: 7,
			Titre: "Bac pro Logistique et transport",
			date: "2003",
			images: '',
			contenu: "Diplômes obtenu à Cherbourg (50) mention bien"
		},
		{
			id: 8,
			Titre: "BEP Comptabilité",
			date: "2001",
			images: '',
			contenu: "Diplômes obtenu à Cherbourg (50)"
		},

	]

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
	/* 	case CLOSE_PAGE:
			return {
				...state,
				openPageInternet: 'close'
			} */
		
    default:
      return state;
  }
};

export default reducer; 