import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//initial State
const initialState = {
	transcations: [],
	error: null,
	loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	//actions
	async function getTranscations() {
		try {
			const res = await axios.get('/api/v1/transactions');
			dispatch({
				type: 'GET_TRANSACTION',
				payload: res.data.data
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	async function deleteTransaction(id) {
		try {
			await axios.delete(`/api/v1/transactions/${id}`);

			dispatch({
				type: 'DELETE_TRANSCATION',
				payload: id
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	async function addTransaction(transcation) {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/v1/transactions', transcation, config);

			dispatch({
				type: 'ADD_TRANSCATION',
				payload: res.data.data
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				transcations: state.transcations,
				error: state.error,
				loading: state.loading,
				deleteTransaction,
				addTransaction,
				getTranscations
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
