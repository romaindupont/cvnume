import { SHOOT_VALUE } from '../actions/game';

const initialState = {
	shoot: 0,
	
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case SHOOT_VALUE:
			return {
				...state,
				shoot: action.value
			}
		
    default:
      return state;
  }
};

export default reducer; 