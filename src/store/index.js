import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer  from './rootReduser';

// const isDevelopment = process.env.NODE_ENV === 'development';
const isDevelopment = true;
const middlewares = [];

if (isDevelopment) {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const apply = applyMiddleware(
	thunkMiddleware,
	...middlewares
);

export const configureAppStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: isDevelopment,
		enhancers: [apply],
	});

	return store;
};

const store = configureAppStore();

export default store;
