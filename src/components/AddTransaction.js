import React, { useState, useContext } from 'react';

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        console.log(e.preventDefault)
        e.preventDefault();

        if(transactionAmount === 0){
            alert("Please enter correct value");
            return;
        }

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        setDescription('')
        setTransactionAmount(0)
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>Description</label>
                    <input type="text"
                           id="description"
                           placeholder="Detail of Transaction"
                           value={description}
                           required="required"
                           onChange={(e) => {
                            setDescription(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label>
                    <input type="number"
                           id="transactionAmount" 
                           placeholder="Dollar Value of Transaction" 
                           value={transactionAmount}
                           required="required"
                           onChange={(e) => {
                               setTransactionAmount(e.target.value)
                           }}/>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
