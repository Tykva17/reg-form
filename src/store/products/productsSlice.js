import { createSlice } from '@reduxjs/toolkit';

export const RESET_STORE = 'RESET_STORE';

export const resetStore = {
	type: RESET_STORE,
};

export const initialState = {
	products: [],
	
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: {
		[RESET_STORE]: () => {
			return initialState;
		},
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
