import { CLOSE_PAGE, SMALL_PAGE, LARGE_PAGE } from "../actions/internet";

const initialState = {
	openPageInternet: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case CLOSE_PAGE:
			return {
				...state,
				openPageInternet: 'close'
			}
		case SMALL_PAGE:
			return {
				...state,
				openPageInternet: 'normal'
			}
		case LARGE_PAGE:
			return {
				...state,
				openPageInternet: 'big'
			}
    default:
      return state;
  }
};

export default reducer; 