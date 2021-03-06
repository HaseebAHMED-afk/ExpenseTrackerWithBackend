import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';
import {numberWithCommas} from '../util/format'

const Balance = () => {
    const {transactions}=useContext(GlobalContext);

    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <p>$ {numberWithCommas(total)}</p>
        </div>
    )
}

export default Balance 