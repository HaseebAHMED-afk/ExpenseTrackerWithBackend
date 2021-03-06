import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalContext";
import {numberWithCommas} from '../util/format';

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-':'+';
    const {deleteTransactions} = useContext(GlobalContext);

    return (
            <li className={transaction.amount<0 ? "minus":"plus"}>
          {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={()=>deleteTransactions(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
