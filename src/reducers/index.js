// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
/* import mondeReducer from './monde'; */
import DossierReducer from './Dossier'

const rootReducer = combineReducers({
  /* monde: mondeReducer, */
	Dossier: DossierReducer,
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