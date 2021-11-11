import { TiDelete, TiEdit } from 'react-icons/ti';

const ExpenseItem = (props) => {

	const handleDeleteExpense = () => {
		// axios to delete and update props expenses list to remove the one with the props.id.
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span style={{marginRight: '30px'}} >${props.cost}</span>
				<TiEdit style={{cursor: 'pointer'}} size='1.5em' onClick={() => props.edit()}/>
				<TiDelete style={{cursor: 'pointer'}} size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;