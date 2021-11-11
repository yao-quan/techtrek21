
function ExpenseTotal(props) {

	return (
		<div style={{height: '80px'}} class='alert alert-primary p-4'>
			<span>Spent so far: ${props.total}</span>
		</div>
	);
};

export default ExpenseTotal;