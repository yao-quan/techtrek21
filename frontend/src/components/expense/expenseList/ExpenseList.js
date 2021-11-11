import { useState, useEffect } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';


function ExpenseList(props) {

	const [filteredExpenses, setfilteredExpenses] = useState(props.expenses || []);

	useEffect(() => {
		setfilteredExpenses(props.expenses);
	}, [props.expenses]);

	const handleChange = (event) => {
		const searchResults = props.expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

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
						name={expense.name}
						cost={expense.amount}
						edit={props.edit}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;