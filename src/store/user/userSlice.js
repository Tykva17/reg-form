import { RESET_STORE } from '../products/productsSlice';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	name: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(RESET_STORE, () => initialState);
	},
	reducers: {
		setName (state, action) {
			state.token = action.payload;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
