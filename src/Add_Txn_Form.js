import { useState } from "react"

const Add_Txn_Form = ({handleFormSubmit}) => {
    const [formData, setFormData] = useState({"remark": "", "amount": ""})

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit(formData)
        setFormData({...formData, "remark": "", "amount": "" })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Transaction</h3>

            <div>
                <label>Remark</label>
                <input type="text" name="remark" onChange={handleChange} value={formData["remark"]} placeholder="Enter a remark"/>
            </div>

            <div>
                <label>Amount</label>
                <label>(Negative - Expense, Positive - Income)</label>
                <input type="number" name="amount" onChange={handleChange} value={formData["amount"]} placeholder="Enter amount"/>
            </div>

            <input type="submit" value="Add Transaction" />
        </form>
    )
}

export default Add_Txn_Form