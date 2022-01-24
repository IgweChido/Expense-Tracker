import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minusmoney' : 'plusmoney'}>
            <button onClick={() => deleteTransaction(transaction.id)} className='xbtn'>x</button>
                    <div className='money'>
                        {transaction.text} <span className='mword'>{sign}N{Math.abs(transaction.amount)}</span>
                    </div>
                    
                </li>
    )
}
