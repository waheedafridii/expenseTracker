import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const getExpense = ()=>{
        let income = 0;
        for(var i= 0 ; i < transactions.length; i++){
            if(transactions[i].transactionAmount < 0){
                income += income + transactions[i].transactionAmount; 
            }
        }
        return income;
    }
    const getIncome = ()=>{
        let expense = 0;
        for(var i= 0 ; i < transactions.length ; i++){
            if(transactions[i].transactionAmount > 0){
                expense += transactions[i].transactionAmount; 
            }
        }
        return expense;
    }
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {getIncome()}
                </p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    {getExpense()}
                </p>
            </div>

        </div>
    )
}
