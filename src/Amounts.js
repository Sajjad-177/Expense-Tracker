const Amounts = ({income, expense}) => (
    <div id="amounts">
        <div id="income-card">
            <h3>INCOME</h3>
            <p><em>$ </em>{income}</p>
        </div>
        <div id="expense-card">
            <h3>EXPENSE</h3>
            <p><em>$ </em>{expense}</p>
        </div>
    </div>
)

export default Amounts