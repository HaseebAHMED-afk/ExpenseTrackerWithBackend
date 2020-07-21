import React,{useContext,useEffect} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalContext';

const TransactionList = () => {
  const {transactions,getTransactions} = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <div>
            <h3>History</h3>
           <hr className="line"/>
            <ul id="list" className="list">
            {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
         
      </ul>
        </div>
    )
}

export default TransactionList
