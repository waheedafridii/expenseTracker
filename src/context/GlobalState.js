import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//create a initial state 
const initialState = {
    transactions: []
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the GlobalContext
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
        console.log('addTrnsaction Dispatch');
        console.log(transaction);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider
            value={
                { 
                    transactions: state.transactions, 
                    deleteTransaction,
                    addTransaction
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}