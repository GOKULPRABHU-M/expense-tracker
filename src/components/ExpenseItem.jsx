import { toast } from "react-toastify"

const ExpenseItem = (props) => {
    const { i, deletetransaction, edittransaction} = props
    const { _id, title, amount,date } = i
    const classname = amount > 0 ? "positive" : "negative"
    const handlerdelete = () => {
        deletetransaction(_id)
        toast.info("deleted successfully")
    }
    const handleredit = () => {
        edittransaction(i)
    }
    return (
        <div className={`expenseitem ${classname}`}>
            <span className="title">
                <div>{title}</div>
                <div className="date">{date}</div>
                </span>
            <span className="amount">${amount}</span>
            <div className="btncontainer">
                <button onClick={handleredit}>edit</button>
                <button onClick={handlerdelete}>delete</button>
            </div>
        </div>
    )
}
export default ExpenseItem;