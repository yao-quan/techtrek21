import { useState, useEffect } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';
import EditExpenseForm from '../forms/EditExpense';

function ExpenseList(props) {

	const [filteredExpenses, setfilteredExpenses] = useState([]);
    const [showEdit, setShowEdit] = useState(false)
	const form = {}

	const setForm = (expense) => {
		form.name = expense.name;
		form.amount = expense.amount;
		form.description = expense.description;
		form.id = expense.id;
		form.project_id = expense.project_id;
		form.category_id = expense.category_id;
		form.updated_by = expense.updated_by;
		form.updated_at = expense.updated_at
	}
	
    const showEditExpense = () => {
        if (showEdit) setShowEdit(false)
        else { 
            setShowEdit(true)
            props.setShowAdd(false)
        }
        return 
    }

	useEffect(() => {
		setfilteredExpenses(props.expenses);
	}, [props.expenses]);

	const handleChange = (event) => {
		const searchResults = props.expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
	const listUpdate = (id) => {
		const newList = filteredExpenses.filter((filteredExpense) =>
			filteredExpense.id === id
		);
		setfilteredExpenses(newList)
	}

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						project_id={expense.project_id}
						category_id={expense.category_id}
						name={expense.name}
						amount={expense.amount}
						description={expense.description}
						showEdit={showEditExpense}
						setForm={setForm}
						listUpdate={listUpdate}
					/>
				))}
			</ul>
			{ showEdit ? 
                <div>
                    <h3 className='mt-3'>Edit Expense</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <EditExpenseForm form={form}/>
                        </div>
                    </div>
                </div>
            : null }
		</>
	);
};

export default ExpenseList;