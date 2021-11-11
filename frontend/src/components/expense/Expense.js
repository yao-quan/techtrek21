import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './budget/Budget'
import ExpenseTotal from './total/ExpenseTotal';
import ExpenseList from './expenseList/ExpenseList';
import AddExpenseForm from './forms/AddExpense';
import RemainingBudget from './budget/remaining/RemainingBudget';
import Button from "@material-ui/core/Button";

function Expense(props) {
    const [expenses, setExpenses] = useState([])
    const [showAdd, setShowAdd] = useState(false)

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
        setShowAdd(false)
        console.log(props.project)
      }, [])
    

    return (
        <div className='container'>
            <h1 className='mt-3'>{props.project.name}</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget allocated={props.project.budget}/>
                </div>
                <div className='col-sm'>
                    <RemainingBudget expenses={expenses} budget={props.project.budget}/>
                </div>
                <div className='col-sm'>
                    <ExpenseTotal expenses={expenses}/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <h3 style={{flex: 7}}>Expenses</h3>
                <Button style={{flex: 3, height: '30px'}} color="primary" variant="contained" onClick={() => setShowAdd(!showAdd)}>Add Expense</Button>
            </div>
            <div className='row '>
                <div className='col-sm'>
                    <ExpenseList expenses={expenses} setShowAdd={setShowAdd}/>
                </div>
            </div>
            { showAdd ? 
                <div>
                    <h3 className='mt-3'>Add Expense</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AddExpenseForm expenses={expenses} project={props.project}/>
                        </div>
                    </div>
                </div>
            : null }
        </div>
            
    )
}

export default Expense
