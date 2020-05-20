import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export default function Transcation({ transcation }) {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transcation.amount < 0 ? '-' : '+';

	return (
		<div>
			<li className={transcation.amount < 0 ? 'minus' : 'plus'}>
				{transcation.text}{' '}
				<span>
					{sign}${numberWithCommas(Math.abs(transcation.amount))}
				</span>
				<button className="delete-btn" onClick={() => deleteTransaction(transcation._id)}>
					x
				</button>
			</li>
		</div>
	);
}
