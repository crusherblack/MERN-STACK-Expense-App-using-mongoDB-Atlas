import React, { useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTranscation = () => {
    const {addTransaction } = useContext(GlobalContext);

    //mendefiniskan state menggunakan hook pada functional component
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const newTranscation = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addTransaction(newTranscation)
    }

	return <>
        <h3>Add New Transcation</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>                
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (Negatif = Expense | Positif = Income)</label>
                <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount" />
            </div>
            <button className="btn">Add Transaction</button>
            
        </form>
    </>;
};

export default AddTranscation;
