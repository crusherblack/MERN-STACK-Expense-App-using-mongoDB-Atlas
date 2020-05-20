import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState'
import Transcation from './Transcation'

const TranscationList = () => {
	const { transcations, getTranscations} = useContext(GlobalContext)

	useEffect(()=>{
		getTranscations()
	}, [])

	return (<>
		<h3>History</h3>
		<ul className="list">
			{transcations.map((transcation) => (
				<Transcation transcation={transcation} key={transcation.id}/>
			))}		
		</ul>
	</>)
};

export default TranscationList;
