import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className='historycon'>

            <h3>History</h3>

            <hr></hr>

            <ul className='tranhistory'>

                {transactions.map(transaction => (<Transaction key={transaction.id} 
                transaction ={transaction}/>))}
                
                

                
            </ul>
            
        </div>
    )
}
