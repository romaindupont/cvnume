import { CLIC_FILE } from '../actions';

const initialState = {
  listDossier: [
		{
			id: 1,
			name: 'A propos',
			slug: 'a_propos',
			contenu : [
				{
					id: 1,
					nomcontenu: 'A propos',
					class: 'dossierMenu',
					dateModif: '06/10/2021 10:10',
					type: 'Dossier de fichiers',
					taille: '',
					nomSheet: ''
				},
				{
					id: 2,
					nomcontenu: 'monCv',
					class: 'feuille',
					dateModif: '06/10/2021 10:10',
					type: 'Document',
					taille: '100 Ko',
					nomSheet: 'pdf'
				},
		]
		},
		{
			id: 2,
			name: 'Connaissances',
			slug: 'connaissances',
			contenu : [
				{
					id: 1,
					nomcontenu: 'MesConnaissances.html',
					class: 'html',
					dateModif: '13/10/2021 10:50',
					type: 'Feuille HTML',
					taille: '200 Ko',
					nomSheet: ''
				}
		]
		},
		{
			id: 3,
			name: 'Hobbies',
			slug: 'hobbies',
			contenu : [
				{
					id: 1,
					nomcontenu: 'MesHobbies.html',
					class: 'html',
					dateModif: '15/10/2021 14:50',
					type: 'Feuille HTML',
					taille: '5000 Ko',
					nomSheet: ''
				}
		]
		},
		{
			id: 4,
			name: 'Diplômes',
			slug: 'diplomes',
			contenu : [
				{
					id: 1,
					nomcontenu: 'MesDiplomes.html',
					class: 'html',
					dateModif: '10/06/2021 08:50',
					type: 'Feuille HTML',
					taille: '5000 Ko',
					nomSheet: ''
				}
		]
		},
		{
			id: 5,
			name: 'Réalisations',
			slug: 'realisations',
			contenu : [
				{
					id: 1,
					nomcontenu: 'MesRealisations.html',
					class: 'html',
					dateModif: '13/10/2021 08:50',
					type: 'Feuille HTML',
					taille: '10000 Ko',
					nomSheet: ''
				}
		]
		},
		{
			id: 6,
			name: 'Contact',
			slug: 'contact',
			contenu : [
				{
					id: 1,
					nomcontenu: 'Contactez-moi',
					class: 'mail',
					dateModif: '13/10/2021 08:50',
					type: 'email',
					taille: '10 Ko',
					nomSheet: ''
				}
		]
		},
		
	],
	idName: 1,
	fileName: 'A propos',
	openPage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case CLIC_FILE:
			return {
				...state,
				idName: action.fileId,
				fileName: action.fileName,
			}
/*     case IS_CONNECTED:
      return {
        ...state,
        isConnected: !state.isConnected,
      }; */
    default:
      return state;
  }
};

export default reducer; 