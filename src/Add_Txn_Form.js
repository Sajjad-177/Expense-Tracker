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

        if((formData["amount"])=="" || formData["remark"]=="") 
            alert("Empty field!!");
        else
            handleFormSubmit(formData);
    
        setFormData({...formData, "remark": "", "amount": "" })
    }
    
    return (
        <form onSubmit={handleSubmit} id="txn-form">
            <h3 className="border-btm">ADD TRANSACTION</h3>

            <div>
                <label>Remark</label>
                <input type="text" name="remark" className="blue-shadow" onChange={handleChange} value={formData["remark"]} placeholder="Enter a remark..."/>
            </div>

            <div>
                <label>Amount ( Negative - Expense, Positive - Income )</label>
                <input type="number" name="amount" className="blue-shadow" onChange={handleChange} value={formData["amount"]} placeholder="Enter amount..."/>
            </div>

            <input type="submit" value="Add Transaction" id="submit-btn"/>
        </form>
    )
}

export default Add_Txn_Form