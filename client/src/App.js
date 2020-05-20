import React from 'react';
import './App.css';

import AddTranscation from './components/AddTranscation';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TranscationList';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTranscation />
			</div>
		</GlobalProvider>
	);
};

export default App;
