import { CLOSE_PAGE, SMALL_PAGE, LARGE_PAGE, OPEN_WEBSITE_PAGE } from "../actions/internet";

const initialState = {
	openPageInternet: '',
	websitePage:'',

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
		case OPEN_WEBSITE_PAGE:
			return {
				...state,
				websitePage: action.url
			}
    default:
      return state;
  }
};

export default reducer; 