function Budget(props) {
	return (
		<div style={{height: '80px'}} class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			<span>Budget: $ {props.allocated}</span>
		</div>
	);
};

export default Budget;