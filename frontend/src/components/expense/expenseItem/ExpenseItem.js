import axios from 'axios';
import { TiDelete, TiEdit } from 'react-icons/ti';

const ExpenseItem = (props) => {

	const handleDeleteExpense = () => {
		// axios to delete and update props expenses list to remove the one with the props.id.
		axios.post('localhoost:8001/remove-expense', {
			id: props.id
		}).then(response => {
			console.log(response)
			props.listUpdate(props.id)
		})
	};

	const handleEditExpense = () => {
		props.showEdit()
		props.setForm({
			id: props.id,
			project_id: props.project_id,
			category_id: props.category_id,
			name: props.name,
			amount: props.amount,
			description: props.description,
			updated_by: '',
			updated_at: new Date()
		})
	}

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			<div>
				{props.name}
			</div>
			<div>
				{props.description}
			</div>			
			<div>
				<span style={{marginRight: '30px'}} >${props.amount}</span>
				<TiEdit style={{cursor: 'pointer'}} size='1.5em' onClick={handleEditExpense} />
				<TiDelete style={{cursor: 'pointer'}} size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;