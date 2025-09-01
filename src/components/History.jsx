import ExpenseItem from "./ExpenseItem";


const History = (props) => {
    const { transaction, deletetransaction, edittransaction, historydata, sethistory } = props
    const showhistory = () => {
        sethistory(!historydata)
    }
    return (

        <div className="history">
            <h3>History</h3>
            <button className="historybutton" onClick={showhistory}>history</button>
            <>
                {historydata == true ? (transaction.map((i) => {
                    return <ExpenseItem key={i._id} i={i} deletetransaction={deletetransaction} edittransaction={edittransaction} />
                })) : null}
            </>

        </div>

    )
}
export default History;