import { useState } from "react";
import History from "./History";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";
import BalanceContainer from "./BalanceContainer";
const INITIAL = []
const Container = () => {
    const [transaction, settransaction] = useState(INITIAL);
    const [edititem,setedit]=useState(null)
    console.log(edititem)
    const addexpense = (title, amount) => {
        settransaction([
            ...transaction, { id: transaction.length + 1, title: title, amount: amount }
        ])
    }
    const deletetransaction = (id) => {
        let deleted = transaction.filter((t) => {
            return t.id !== id
        })
        settransaction(deleted)
    }
    const edittransaction=(i)=>{
        setedit(i)
    }
    const updatexpense=((id,title,amount)=>{
       const ut= transaction.map((t)=>{
            if(t.id==id)
                return{id:id,title:title,amount:amount}
            else
                return t
        })
        settransaction(ut)
    })
    return (
        <div className="container">
            <h2>Expense Tracker</h2>
            <BalanceContainer transaction={transaction} />
            <History transaction={transaction} deletetransaction={deletetransaction} edittransaction={edittransaction} />
            <ExpenseForm addexpense={addexpense} edititem={edititem} updatexpense={updatexpense} setedit={setedit}/>
        </div>
    )
}
export default Container;