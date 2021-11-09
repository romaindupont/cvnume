

const initialState = {
	Experiences: [
		{
			id: 1,
			nom: "Fabrique124",
			description: "Site vitrine pour la présentation d'un modèle de voiture vintage 100% électrique, la spider 124. Site composé d'effet parallax, de 3d, entièrement responsive",
			techno: 'HTML/CSS/JS - ThreeJS',
			githubLink:'https://github.com/romaindupont/fabrique124',
			photo: [
				{
					id:1,
					linkPhoto:''
				}
			],
			link: '',
		},
		{
			id: 2,
			nom: "Eb Site",
			description: "Site responsive de e-commerce, uniquement Front, présentation d'un modèle, réalisé en mobile first. Création de compte, commandes, passage de commande,...",
			techno: 'React/REDUX/SASS',
			githubLink:'https://github.com/romaindupont/EBSITE',
			photo: [
				{
					id:1,
					linkPhoto:''
				}
			],
			link: 'https://fast-volleyball.surge.sh',
		},
		{
			id: 3,
			nom: "Planning de production",
			description: "Planning de production mécanique adapté à une problèmatique interne, visualisation du planning au format gantt le but était de se substituer au document Excel existant.",
			techno: ' FRONT : Electron/React/Redux/React-router/Axios/SASS BACK: PSQL, ExpressJs, Node',
			githubLink:'https://github.com/romaindupont/planningdeProd',
			photo: [
				{
					id:1,
					linkPhoto:'https://github.com/romaindupont/planningdeProd/blob/main/planningGG.png'
				},
				{
					id:2,
					linkPhoto:'https://github.com/romaindupont/planningdeProd/blob/main/planningG2.png'
				},
				{
					id:3,
					linkPhoto:'https://github.com/romaindupont/planningdeProd/blob/main/planningOrdo1.png'
				},
				{
					id:4,
					linkPhoto:'https://github.com/romaindupont/planningdeProd/blob/main/baseArticles.png'
				},
				{
					id:5,
					linkPhoto:'https://github.com/romaindupont/planningdeProd/blob/main/LctProd.png'
				},
			],
			link: '',
		},
		{
			id: 4,
			nom: "Snippets Programms",
			description: "Application web pour conserver ses meilleurs bout de codes réutilisables. Recherche facilitée, choix d'un mode dark ou light facilité par l'utilisation du svg ampoule. Réalisation du Front et du Back",
			techno: 'FRONT : React/Redux/React-router/Axios/SASS/Prism BACK: SQlite3, ExpressJs, Node, Nodemon',
			githubLink:'https://github.com/romaindupont/snippetProgramms',
			photo: [
				{
					id:1,
					linkPhoto:'https://github.com/romaindupont/snippetProgramms/blob/main/src/assets/images/Capture1.PNG?raw=true'
				},
				{
					id:2,
					linkPhoto:'https://github.com/romaindupont/snippetProgramms/blob/main/src/assets/images/Capture2.PNG?raw=true'
				}
			],
			link: '',
		},
		{
			id: 5,
			nom: "Obsolescences des composants",
			description: "Application web pour la recherche d'obsolescence des composants Electroniques, Développer dans le but de retirer des informations régulières d'obsolescence ou non sur les sites des fabricants de composants électroniques. Réalisation du front et du Back",
			techno: 'HTML/CSS/JS/Pupeeters',
			githubLink:'https://github.com/romaindupont/ProjetObsolescenceComposant',
			photo: [
				{
					id:1,
					linkPhoto:'https://github.com/romaindupont/ProjetObsolescenceComposant/blob/main/src/Capture3.PNG'
				},
				{
					id:2,
					linkPhoto:'https://github.com/romaindupont/ProjetObsolescenceComposant/blob/main/src/Capture2.PNG'
				}
			],
			link: '',
		},
		{
			id: 6,
			nom: "Convertisseur Spécifique",
			description: "",
			techno: '',
			githubLink:'https://github.com/romaindupont/ConvertQspiFile',
			photo: [
				{
					id:1,
					linkPhoto:''
				}
			],
			link: '',
		},
		{
			id: 7,
			nom: "Mapquiz",
			description: "Projet de fin de formation responsive, réalisé à 4. Réalisation du back et des SVG",
			techno: 'FRONT : React/Redux/React-router/Axios/SASS BACK: MySQL, ExpressJs, Node, Nodemon',
			githubLink:'https://github.com/romaindupont/Mapquiz-Front https://github.com/romaindupont/Mapquiz-Back',
			photo: [
				{
					id:1,
					linkPhoto:''
				}
			],
			link: '',
		},
		{
			id: 8,
			nom: "Outils Python",
			description: "",
			techno: '',
			githubLink:'',
			photo: [
				{
					id:1,
					linkPhoto:''
				}
			],
			link: '',
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