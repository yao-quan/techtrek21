import { useState, useEffect } from 'react';

const RemainingBudget = (props) => {

	const [totalExpenses, setTotalExpenses] = useState([]);

	useEffect(() => {
		setTotalExpenses(
			props.expenses.reduce((total, expense) => {
				return (total += expense.amount);
			}, 0)
		)
	}, [props.expenses])

	const alertType = props.remaining > props.budget ? 'alert-danger' : 'alert-success';

	return (
		<div style={{height: '80px'}} class={`alert p-4 ${alertType}`}>
			<span>Remaining Budget: ${props.budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;