import History_Item from "./History_Item"

const History = ({history}) => (
    <div id="history">
        <h3 className="border-btm">HISTORY</h3>
        <div>
            <ul>
                {history.map((txn, index) => <History_Item key={index} txn={txn}/>)}
            </ul>
        </div>
    </div>
)

export default History