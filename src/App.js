import './App.css';
import Amounts from './Amounts';
import History from './History';
import Add_Txn_Form from './Add_Txn_Form';
import { useState } from 'react';

const App = () => {
    const [totIncome, setTotIncome] = useState(0.0)
    const [totExpense, setTotExpense] = useState(0.0)
    const [history, setHistory] = useState([])

    // useEffect(() => {
    //     setTotIncome(JSON.parse(window.sessionStorage.getItem("income")));
    //     setTotExpense(JSON.parse(window.sessionStorage.getItem("expense")));
    //     setHistory(JSON.parse(window.sessionStorage.getItem("history")));
    // }, [])

    // useEffect(() => window.sessionStorage.setItem("income", totIncome), [totIncome])
    // useEffect(() => window.sessionStorage.setItem("expense", totExpense), [totExpense])
    // useEffect(() => window.sessionStorage.setItem("history", history), [history])

    const handleFormSubmit = (txn) => {
        const amount = parseFloat(txn["amount"])

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
            <h1 id="title">Expense Tracker</h1>

            <div id="balance">
                <h3>YOUR BALANCE</h3>
                <p><em>$ </em>{totIncome - totExpense}</p>
            </div>
            <Amounts income={totIncome} expense={totExpense} />
            <History history={history}/>
            <Add_Txn_Form handleFormSubmit={handleFormSubmit}/>
        </div>
    );
}

export default App;
