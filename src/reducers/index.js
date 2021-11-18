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

const rootReducer = combineReducers({
  /* monde: mondeReducer, */
	Dossier: DossierReducer,
	Internet: InternetReducer,
	Mail: MailReducer,
	Diplomes: DiplomeReducer,
	Xp: XpReducer,
	Weather: WeatherReducer,
});

export default rootReducer;

//reducer
/* import {
  IS_CONNECTED,
  TOGGLE_OPEN,
  LOGOUT,
} from '../actions/theme';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CONNECTED:
      return {
        ...state,
        isConnected: !state.isConnected,
      };
    default:
      return state;
  }
};

export default reducer; */