import { combineReducers } from 'redux';
import products, { RESET_STORE } from './products/productsSlice';
import user from './user/userSlice';

export const reducerSlices = {
	products,
	user,
};

const appReducer = combineReducers(reducerSlices);

const rootReducer = (state, action) => {
	if (action.type === RESET_STORE) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
