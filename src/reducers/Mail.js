import { LARGE_MAIL_PAGE, CLOSE_MAIL_PAGE, SMALL_MAIL_PAGE, CHANGE_CATEGORY, CHOOSE_MESSAGE, SEND_MESSAGE } from "../actions/mail";

const initialState = {
	openPageMail: 'close',
	mail: [
		{
			id: 1,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Ma lettre de motivation',
			date: '20-10-2021',
			text: `Bonjour, \n 
			Actuellement à la recherche d'un emploi dans le domaine du développement web, j'ai été	attiré par votre société jeune et dynamique. Après plus de 15 ans dans les achats et après avoir commencé en autodidacte, j'ai entamé la reconversion en 2020-21 en intégrant l'école o'clock, et j'ai pu acquérir des compétences dans ce domaine. J'ai d'ailleurs obtenu mon titre pro en juin dernier. \n  \n Je suis rigoureux, très motivé et j'ai l'envie d'en apprendre encore plus. Je suis certain que ma motivation et mon expérience professionnelle passée compenseront mon manque d'expérience dans le domaine. \n Intégrer votre société, représente pour moi la possibilité de réussir ma reconversion. \n  \n Vous trouverez sur mon profil github certain projet que j'ai pu réaliser dernièrement dont un mini logiciel de gestion d'ordonnancement de production, réalisé avec Electron, sans framework. \n Vous pouvez télécharger le .exe à l'adresse suivante	: https://github.com/romaindupont/planningdeProd \n  \n J'ai également développé pour une jeune entreprise leur site web, ou plus précisément leur	page de présentation en HTML/CSS et JS. Le projet contient également de la 3d avec threejs, un effet parrallax et d'autres petits effets CSS/JS. \n Vous trouverez ce projet son le nom fabrique124 sur mon github, le site est pour le moment déployé sur un hébergeur gratuit à l'adresse suivante :	https://dangerous-tank.surge.sh/ \n  \n De même, j'ai pu réaliser un site e-commerce pour m'entraîner (exclusivement front pour le	moment), que vous trouverez sous le nom de EBSite sur github ou à l'adresse en bas de ce	mail. L'application est mobile first et il reste pas mal de travail encore mais vous pouvez	avoir un aperçu de mon travail. \n  \n Restant à votre disposition pour toutes informations complémentaires et/ou pour se	rencontrer,	Veuillez agréer, Madame, Monsieur, mes sincères salutations. \n  \n Cordialement, \n  \n Romain Dupont \n  \n Mon profil github : https://github.com/romaindupont \n LinkedIn : https://www.linkedin.com/in/romain-dupont-developpeurweb/ \n Projet : https://mapquizfront.herokuapp.com/ \n Mon site : https://www.romaindupont.me/ \n Site e-commerce en cours de création : https://fast-volleyball.surge.sh/ \n Site lafabrique124 :	https://dangerous-tank.surge.sh/'`,
			mail: 'rdt.romaindupont@gmail.com'
		},
		{
			id: 2,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Mes informations personnelles',
			date: '18-10-2021',
			text: `Titulaire du titre pro développeur web & web mobile, je peux vous accompagner dans la réalisation de votre site web professionnel. Site e-commerce, page de présentation, ... \n Tous mes sites sont développés pour passer sur tous les types de support. \n Demandez mon cahier des charges pour définir votre besoin ou télécharger le depuis la page d'accueil.`,
			mail: 'rdt.romaindupont@gmail.com'
		},
		{
			id: 3,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Mon adresse',
			date: '18-10-2021',
			text: 'Disponible sur la région caennaise, je suis également disponible en remote full ou partiel, je dispose d\'un moyen de locomotion',
			mail: 'rdt.romaindupont@gmail.com'
		},
		{
			id: 4,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Me contacter',
			date: '18-10-2021',
			text: 'Téléphone, mail, message depuis le site, tous les moyens sont bons pour me contacter, je vous répondrai le plus rapidement possible.',
			mail: 'rdt.romaindupont@gmail.com'
		},
		{
			id: 5,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'send',
			title: 'Message envoyé',
			date: '18-10-2021',
			text: 'Vous ne m\'avez toujours pas envoyé de mail, alors ce mail n\'est qu\'un mail pour remplir la boite des messages envoyés, j\'attends votre message pour enfin remplir cette boite',
			mail: 'rdt.romaindupont@gmail.com'
		},
		{
			id: 6,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'trash',
			title: 'Message supprimé',
			date: '18-10-2021',
			text: 'Jamais je ne supprimerai votre message, j\'y répondrai le plus rapidement possible soyez-en sur',
			mail: 'rdt.romaindupont@gmail.com'
		}
	],
	category:'inbox',
	id: null,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case CLOSE_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'close'
			}
		case SMALL_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'normal'
			}
		case LARGE_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'big'
			}
		case CHANGE_CATEGORY:
			return {
				...state,
				category: action.category,
			}
		case CHOOSE_MESSAGE:
			return {
				...state,
				id: action.id,
			}
		case SEND_MESSAGE:
			return {
				...state,
				mail: [
					...state.mail,
					{
						id: action.id,
						prenom: action.prenom,
						nom: action.nom,
						category: action.category,
						title: action.title,
						date: action.date,
						text: action.text,
						mail: action.mail
					}
				]
			}
    default:
      return state;
  }
};

export default reducer; 