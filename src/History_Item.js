const History_Item = ({txn}) => (
    <li className={txn["amount"]>0?"income":"expense"}>
        <p>{txn.remark}</p>
        <p>{txn.amount>0 ? txn.amount : -1*txn.amount}</p>
    </li>
)

export default History_Item