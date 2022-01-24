import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExp = () => {
    const {transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
   
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);


    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc,item) => (acc += item),0) * -1)
        .toFixed(2);
    return (
        <div className='con1box ' >
            
            <div className='income'>
                <p className='inword'>INCOME</p>
                <p className='innum'>N{income}</p>
            </div>

            <div className='vertline'></div>

            <div className='expense'>
                <p className='inword'>EXPENSE</p>
                <p className='expnum'>N{expense}</p>
            </div>
        </div>
    )
}
