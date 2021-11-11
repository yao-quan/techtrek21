const RemainingBudget = (props) => {

	const alertType = props.remaining > props.budget ? 'alert-danger' : 'alert-success';

	return (
		<div style={{height: '80px'}} class={`alert p-4 ${alertType}`}>
			<span>Remaining: ${props.remaining}</span>
		</div>
	);
};

export default RemainingBudget;