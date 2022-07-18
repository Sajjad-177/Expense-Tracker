import './App.css';

import History from './History';
import Add_Txn_Form from './Add_Txn_Form';
import { useState } from 'react';

const App = () => {
    const [totIncome, setTotIncome] = useState(0.0)
    const [totExpense, setTotExpense] = useState(0.0)
    const [history, setHistory] = useState([])

    const handleFormSubmit = (txn) => {
        const amount = parseFloat(txn["amount"])

        if(Number.isNaN(amount)) { alert("Empty Field!!"); return; }
        if(amount == 0) { alert("zero amount not allowed!"); return; }
        if(amount < 0 && (-1 * amount ) > totIncome - totExpense) {console.log(amount,typeof(totExpense),totExpense, typeof(totIncome),totIncome); alert("Not enough balance!!"); return; }
        
        if(amount > 0)
            setTotIncome((prevTotIncome) => prevTotIncome + amount)
        else
            setTotExpense((prevTotExpense) => prevTotExpense - amount)
        
        txn["amount"] = amount
        setHistory([...history, txn])
    }

    return (
        <div className="App">
            <h1>Expense Tracker</h1>

            <div>
                <h3>Balance</h3>
                <p>${totIncome - totExpense}</p>
            </div>
            <History history={history}/>
            <Add_Txn_Form handleFormSubmit={handleFormSubmit}/>
        </div>
    );
}

export default App;
