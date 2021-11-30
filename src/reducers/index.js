// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
/* import mondeReducer from './monde'; */
import DossierReducer from './Dossier';
import InternetReducer from './Internet';
import MailReducer from './Mail';
import DiplomeReducer from './Diplomes';
import XpReducer from './Xp';
import WeatherReducer from './Weather';
import GamesReducer from './Games';

const rootReducer = combineReducers({
  /* monde: mondeReducer, */
	Dossier: DossierReducer,
	Internet: InternetReducer,
	Mail: MailReducer,
	Diplomes: DiplomeReducer,
	Xp: XpReducer,
	Weather: WeatherReducer,
	Games: GamesReducer,
});

export default rootReducer;

