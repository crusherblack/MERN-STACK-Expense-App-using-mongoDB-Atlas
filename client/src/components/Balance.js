import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas} from '../utils/format'

const Balance = () => {
	const { transcations } = useContext(GlobalContext)

	const amounts = transcations.map(transcation => transcation.amount);

	const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

	return <>
		<h4>Your Balance</h4>
		<h1>${numberWithCommas(total)}</h1>
	</>;
};

export default Balance;
