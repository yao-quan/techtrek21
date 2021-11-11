import { useState, useEffect } from 'react';

function ExpenseTotal(props) {

	const [totalExpenses, setTotalExpenses] = useState([]);

	useEffect(() => {
		setTotalExpenses(
			props.expenses.reduce((total, expense) => {
				return (total += expense.amount);
			}, 0)
		)
	}, [props.expenses])

	return (
		<div style={{height: '80px'}} class='alert alert-primary p-4'>
			<span>Expenses: ${totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;