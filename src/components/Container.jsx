import { useEffect, useState } from "react";
import History from "./History";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";
import BalanceContainer from "./BalanceContainer";
import Search from "./search";
const INITIAL = []
const Container = () => {
    const [transaction, settransaction] = useState(INITIAL);
    const [edititem, setedit] = useState(null)
    const [historydata,sethistory]=useState(false)

    const addexpense = async (title, amount) => {
        await fetch("https://expense-tracker-backend-ap3a.onrender.com/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, amount })
        });
        getexpense();
    }
    useEffect(() => {
        getexpense();
    }, [])
    const getexpense = async () => {
        const res = await fetch("https://expense-tracker-backend-ap3a.onrender.com/getallexpense", {
            method: "GET"
        });
        const data = await res.json();
        settransaction(data);
        
    }
    const deletetransaction = async (_id) => {
        await fetch("https://expense-tracker-backend-ap3a.onrender.com/deleteexpense", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id })
        })
        getexpense();
    }


    const edittransaction = (i) => {
        setedit(i)
    }
    const updatexpense = async (_id, title, amount) => {
        await fetch("https://expense-tracker-backend-ap3a.onrender.com/editexpense", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id, title, amount })
        })
        toast.info("edited successfully")
        getexpense()
    }
    return (
        <div className="container">
            <h2>Expense Tracker</h2>
            <BalanceContainer transaction={transaction} />
            <History transaction={transaction} deletetransaction={deletetransaction} edittransaction={edittransaction} historydata={historydata} sethistory={sethistory}/>
            <ExpenseForm addexpense={addexpense} edititem={edititem} updatexpense={updatexpense} setedit={setedit} />
        </div>
    )
}
export default Container;