import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './budget/Budget'
import ExpenseTotal from './total/ExpenseTotal';
import ExpenseList from './expenseList/ExpenseList';
import AddExpenseForm from './forms/AddExpense';
import EditExpenseForm from './forms/EditExpense';
import RemainingBudget from './budget/remaining/RemainingBudget';
import Button from "@material-ui/core/Button";

function Expense(props) {
    const [expenses, setExpenses] = useState([])
    const [totalExpense, setTotalExpense] = useState(0)
    const [currentId, setCurrentId] = useState(0)
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    const editExpense = () => {
        setShowEdit(!showEdit)
    }

    useEffect(() => {
        setExpenses([
            {
                "id": 1,
                "project_id": 2,
                "category_id": 2,
                "name": "Server Maintenance",
                "description": "Server maintenance and upgrading work to incorporate BC plans",
                "amount": 30000,
                "created_at": "2021-11-04T16:00:00.000Z",
                "created_by": "Jacky",
                "updated_at": "2021-11-06T16:00:00.000Z",
                "updated_by": "Jacky"
            }
        ])
        setTotalExpense(
            expenses.reduce((total, expense) => {
                return (total += expense.amount);
            }, 0)
        )
        setCurrentId(0)
        setShowAdd(false)
        setShowEdit(false)
      }, [expenses])
    

    return (
        <div className='container'>
            <h1 className='mt-3'>{props.project.name}</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget allocated={props.project.budget}/>
                </div>
                <div className='col-sm'>
                    <RemainingBudget remaining={props.project.budget - totalExpense} budget={props.project.budget}/>
                </div>
                <div className='col-sm'>
                    <ExpenseTotal total={totalExpense}/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <h3 style={{flex: 7}}>Expenses</h3>
                <Button style={{flex: 3, height: '30px'}} color="primary" variant="contained" onClick={() => setShowAdd(!showAdd)}>Add Expense</Button>
            </div>
            <div className='row '>
                <div className='col-sm'>
                    <ExpenseList expenses={expenses} edit={editExpense}/>
                </div>
            </div>
            { showAdd ? 
                <div>
                    <h3 className='mt-3'>Add Expense</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AddExpenseForm currentId={currentId} project={props.project}/>
                        </div>
                    </div>
                </div>
            : null }
            { showEdit ? 
                <div>
                    <h3 className='mt-3'>Edit Expense</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <EditExpenseForm currentId={currentId} project={props.project}/>
                        </div>
                    </div>
                </div>
            : null }
        </div>
            
    )
}

export default Expense
