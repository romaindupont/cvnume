import { LARGE_MAIL_PAGE, CLOSE_MAIL_PAGE, SMALL_MAIL_PAGE } from "../actions/mail";

const initialState = {
	openPageMail: 'close',

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
    default:
      return state;
  }
};

export default reducer; 