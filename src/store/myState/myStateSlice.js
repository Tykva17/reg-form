import { createSlice } from '@reduxjs/toolkit';
import { RESET_STORE } from '../app/appSlice';

export const initialState = {
	myData: '',
};

const myStateSlice = createSlice({
	name: 'myState',
	initialState,
	extraReducers: {
		[RESET_STORE]: () => {
			return initialState;
		},
	},
	reducers: {
		setData: (state, action) => {
			state.myData = action.payload;
		},
	},
});

export const myStateActions = myStateSlice.actions;

export default myStateSlice.reducer;

