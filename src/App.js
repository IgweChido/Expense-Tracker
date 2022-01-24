
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <GlobalProvider>
    <div className= 'App' >
        <Header />

     <div className='container1'>
        <Balance/>
        <IncomeExp/>
        <TransactionList/>
        <AddTransaction/>
     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
